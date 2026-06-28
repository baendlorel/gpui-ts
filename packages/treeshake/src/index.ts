import { createUnplugin } from 'unplugin';
import { parse } from '@babel/parser';
import * as t from '@babel/types';
import generate from '@babel/generator';

export interface PluginOptions {
  /**
   * zed-gpui package name or import path
   * @default 'zed-gpui'
   */
  zedGpuiPackageName?: string;

  /**
   * Path to the element.ts file in zed-gpui package
   * @default 'zed-gpui/element'
   */
  elementPath?: string;

  /**
   * Enable debug logging
   * @default false
   */
  debug?: boolean;
}

type UsedMethods = {
  unknown: Set<string>;
  byPrototype: Map<string, Set<string>>;
};

const defaultOptions: PluginOptions = {
  zedGpuiPackageName: 'zed-gpui',
  elementPath: 'zed-gpui/element',
  debug: false,
};

const keepHTMLElementMethods = new Set(['on', 'off', 'on_', 'off_']);

const factoryElementTypes: Record<string, string> = {
  div: 'HTMLDivElement',
  span: 'HTMLSpanElement',
  section: 'HTMLElement',
  p: 'HTMLParagraphElement',
  input: 'HTMLInputElement',
  textarea: 'HTMLTextAreaElement',
  btn: 'HTMLButtonElement',
  select: 'HTMLSelectElement',
  svg: 'SVGElement',
  mathml: 'MathMLElement',
};

const tagElementTypes: Record<string, string> = {
  a: 'HTMLAnchorElement',
  button: 'HTMLButtonElement',
  details: 'HTMLDetailsElement',
  dialog: 'HTMLDialogElement',
  form: 'HTMLFormElement',
  img: 'HTMLImageElement',
  input: 'HTMLInputElement',
  label: 'HTMLLabelElement',
  meter: 'HTMLMeterElement',
  option: 'HTMLOptionElement',
  progress: 'HTMLProgressElement',
  select: 'HTMLSelectElement',
  textarea: 'HTMLTextAreaElement',
  video: 'HTMLMediaElement',
  audio: 'HTMLMediaElement',
};

/**
 * Unplugin for zed-gpui tree-shaking optimization
 * Removes unused zed-gpui methods from the bundle
 */
export const zedGpuiPlugin = createUnplugin<PluginOptions | undefined>((options = {}) => {
  const opts = { ...defaultOptions, ...options };
  const usedMethods: UsedMethods = {
    unknown: new Set(),
    byPrototype: new Map(),
  };

  return {
    name: 'unplugin-zed-gpui',

    transform(code, id) {
      if (shouldProcessFile(id)) {
        analyzeUsage(code, usedMethods, opts);
        const result = transformForbiddenHCalls(code, opts);
        if (result) {
          return result;
        }
      }

      if (hasPrototypeEnhancement(code)) {
        if (opts.debug) {
          console.log(`[zed-gpui] Processing element file: ${id}`);
          console.log(`[zed-gpui] Used methods:`, formatUsedMethods(usedMethods));
        }

        return transformElementFile(code, usedMethods, opts);
      }

      return null;
    },

    buildEnd() {
      usedMethods.unknown.clear();
      usedMethods.byPrototype.clear();
    },
  };
});

/**
 * Check if a file should be analyzed for zed-gpui usage
 */
function shouldProcessFile(id: string): boolean {
  // Skip node_modules and dist directories
  if (id.includes('node_modules') || id.includes('dist')) {
    return false;
  }

  // Only process TypeScript and JavaScript files
  return /\.(ts|js|tsx|jsx)$/.test(id);
}

function transformForbiddenHCalls(code: string, options: PluginOptions) {
  if (!hasZedGpuiImport(code, options) || !/\bh\s*\(\s*(['"])(svg|mathml)\1/.test(code)) {
    return null;
  }

  try {
    const ast = parse(code, {
      sourceType: 'module',
      plugins: ['typescript', 'jsx'],
    });
    let modified = false;

    visitAst(ast.program, (node) => {
      if (!t.isCallExpression(node) || !t.isIdentifier(node.callee, { name: 'h' })) {
        return;
      }

      const arg = node.arguments[0];
      if (!t.isStringLiteral(arg) || (arg.value !== 'svg' && arg.value !== 'mathml')) {
        return;
      }

      node.callee = t.identifier('throws_');
      node.arguments = [
        t.stringLiteral(
          arg.value === 'svg'
            ? "Cannot use h('svg') to create SVGElement"
            : "Cannot use h('mathml') to create MathMLElement",
        ),
      ];
      node.typeArguments = undefined;
      modified = true;
    });

    if (!modified) {
      return null;
    }

    ast.program.body.push(
      t.functionDeclaration(
        t.identifier('throws_'),
        [t.identifier('message')],
        t.blockStatement([
          t.throwStatement(t.newExpression(t.identifier('Error'), [t.identifier('message')])),
        ]),
      ),
    );

    const output = generate(ast, {}, code);
    return { code: output.code };
  } catch (error) {
    if (options.debug) {
      console.warn(`[zed-gpui] Failed to transform forbidden h() calls:`, error);
    }
    return null;
  }
}

function hasZedGpuiImport(code: string, options: PluginOptions): boolean {
  const packageName = options.zedGpuiPackageName!.replace(/[.*+?^\${}()|[\]\\]/g, '\\$&');
  return new RegExp(
    `from\\s+['"]${packageName}(?:\\/[^'"]*)?['"]|import\\s+['"]${packageName}(?:\\/[^'"]*)?['"]`,
  ).test(code);
}

function visitAst(node: t.Node, visitor: (node: t.Node) => void) {
  visitor(node);

  for (const key in node) {
    if (!Object.prototype.hasOwnProperty.call(node, key)) {
      continue;
    }
    const child = (node as any)[key];
    if (Array.isArray(child)) {
      child.forEach((item) => item?.type && visitAst(item, visitor));
    } else if (child?.type) {
      visitAst(child, visitor);
    }
  }
}

/**
 * Analyze code to find zed-gpui method usage
 */
function analyzeUsage(code: string, usedMethods: UsedMethods, options: PluginOptions) {
  try {
    const ast = parse(code, {
      sourceType: 'module',
      plugins: ['typescript', 'jsx'],
    });

    let hasZedGpuiImport = false;
    const program = ast.program;

    // First pass: check if file imports zed-gpui
    for (const node of program.body) {
      if (t.isImportDeclaration(node)) {
        const source = node.source.value;
        if (
          source === options.zedGpuiPackageName ||
          source.startsWith(options.zedGpuiPackageName + '/')
        ) {
          hasZedGpuiImport = true;
          break;
        }
      }
    }

    if (!hasZedGpuiImport && !hasZedGpuiUsage(code)) {
      return;
    }

    scanNodeForMethodCalls(program, usedMethods, new Map());

    if (options.debug && (usedMethods.unknown.size > 0 || usedMethods.byPrototype.size > 0)) {
      console.log(`[zed-gpui] Found methods in file:`, formatUsedMethods(usedMethods));
    }
  } catch (error) {
    // Parse errors are expected for some files (like JSON, config files, etc.)
    if (options.debug) {
      console.warn(`[zed-gpui] Failed to parse:`, error);
    }
  }
}

/**
 * Quick check if code might contain zed-gpui usage
 */
function hasZedGpuiUsage(code: string): boolean {
  return /\.\s*([a-z_][a-zA-Z0-9_]*)\s*\(/.test(code);
}

function hasPrototypeEnhancement(code: string): boolean {
  return code.includes('$_(') && /(HTML[A-Za-z]*Element|SVGElement|MathMLElement)/.test(code);
}

/**
 * Recursively scan AST nodes for method calls
 */
function scanNodeForMethodCalls(
  node: t.Node,
  usedMethods: UsedMethods,
  bindings: Map<string, string>,
) {
  if (t.isProgram(node) || t.isBlockStatement(node)) {
    const scopedBindings = new Map(bindings);
    for (const child of node.body) {
      scanNodeForMethodCalls(child, usedMethods, scopedBindings);
    }
    return;
  }

  if (
    t.isFunctionDeclaration(node) ||
    t.isFunctionExpression(node) ||
    t.isArrowFunctionExpression(node)
  ) {
    const scopedBindings = new Map(bindings);
    for (const param of node.params) {
      bindElementType(param, scopedBindings);
    }
    scanNodeForMethodCalls(node.body, usedMethods, scopedBindings);
    return;
  }

  if (t.isVariableDeclaration(node)) {
    for (const declaration of node.declarations) {
      if (declaration.init) {
        scanNodeForMethodCalls(declaration.init, usedMethods, bindings);
      }
      if (t.isIdentifier(declaration.id)) {
        const elementType =
          getElementTypeFromTypeAnnotation(declaration.id) ??
          (declaration.init ? inferElementType(declaration.init, bindings) : undefined);
        if (elementType) {
          bindings.set(declaration.id.name, elementType);
        }
      }
    }
    return;
  }

  if (t.isAssignmentExpression(node)) {
    scanNodeForMethodCalls(node.right, usedMethods, bindings);
    if (t.isIdentifier(node.left)) {
      const elementType = inferElementType(node.right, bindings);
      if (elementType) {
        bindings.set(node.left.name, elementType);
      }
    } else {
      scanNodeForMethodCalls(node.left, usedMethods, bindings);
    }
    return;
  }

  if (
    t.isCallExpression(node) &&
    t.isMemberExpression(node.callee) &&
    !t.isSuper(node.callee.object)
  ) {
    const property = node.callee.property;
    if (t.isIdentifier(property) && /^[a-z][a-zA-Z0-9_]*$/.test(property.name)) {
      const elementType = inferElementType(node.callee.object, bindings);
      addUsedMethod(usedMethods, elementType, property.name);
    }
  }

  for (const key in node) {
    if (!Object.prototype.hasOwnProperty.call(node, key)) {
      continue;
    }
    const child = (node as any)[key];
    if (Array.isArray(child)) {
      child.forEach((item) => item?.type && scanNodeForMethodCalls(item, usedMethods, bindings));
    } else if (child?.type) {
      scanNodeForMethodCalls(child, usedMethods, bindings);
    }
  }
}

function bindElementType(node: t.Node, bindings: Map<string, string>) {
  if (t.isIdentifier(node)) {
    const elementType = getElementTypeFromTypeAnnotation(node);
    if (elementType) {
      bindings.set(node.name, elementType);
    }
  }
}

function addUsedMethod(
  usedMethods: UsedMethods,
  elementType: string | undefined,
  methodName: string,
) {
  if (!elementType) {
    usedMethods.unknown.add(methodName);
    return;
  }

  if (!usedMethods.byPrototype.has(elementType)) {
    usedMethods.byPrototype.set(elementType, new Set());
  }
  usedMethods.byPrototype.get(elementType)!.add(methodName);
}

function inferElementType(node: t.Node, bindings: Map<string, string>): string | undefined {
  if (t.isIdentifier(node)) {
    return bindings.get(node.name);
  }

  if (t.isTSAsExpression(node) || t.isTSTypeAssertion(node)) {
    return (
      getElementTypeFromTsType(node.typeAnnotation) ?? inferElementType(node.expression, bindings)
    );
  }

  if (t.isTSNonNullExpression(node)) {
    return inferElementType(node.expression, bindings);
  }

  if (t.isCallExpression(node)) {
    if (t.isMemberExpression(node.callee)) {
      if (
        t.isIdentifier(node.callee.object, { name: 'document' }) &&
        (t.isIdentifier(node.callee.property, { name: 'querySelector' }) ||
          t.isIdentifier(node.callee.property, { name: 'getElementById' }))
      ) {
        const typeArg = node.typeArguments?.params[0];
        return typeArg && t.isTSType(typeArg) ? getElementTypeFromTsType(typeArg) : 'HTMLElement';
      }

      if (
        t.isIdentifier(node.callee.property, { name: 'createElement' }) &&
        t.isIdentifier(node.callee.object, { name: 'document' }) &&
        t.isStringLiteral(node.arguments[0])
      ) {
        return tagElementTypes[node.arguments[0].value] ?? 'HTMLElement';
      }

      return inferElementType(node.callee.object, bindings);
    }

    if (t.isIdentifier(node.callee)) {
      if (node.callee.name === 'h' && t.isStringLiteral(node.arguments[0])) {
        return tagElementTypes[node.arguments[0].value] ?? 'HTMLElement';
      }
      return factoryElementTypes[node.callee.name];
    }
  }

  return undefined;
}

function getElementTypeFromTypeAnnotation(node: t.Identifier): string | undefined {
  return node.typeAnnotation && t.isTSTypeAnnotation(node.typeAnnotation)
    ? getElementTypeFromTsType(node.typeAnnotation.typeAnnotation)
    : undefined;
}

function getElementTypeFromTsType(node: t.TSType): string | undefined {
  return t.isTSTypeReference(node) &&
    t.isIdentifier(node.typeName) &&
    isElementType(node.typeName.name)
    ? node.typeName.name
    : undefined;
}

function isElementType(name: string): boolean {
  return (
    name === 'HTMLElement' ||
    /^HTML[A-Za-z]*Element$/.test(name) ||
    name === 'SVGElement' ||
    name === 'MathMLElement'
  );
}

/**
 * Transform element.ts to remove unused methods
 */
function transformElementFile(code: string, usedMethods: UsedMethods, options: PluginOptions) {
  try {
    const ast = parse(code, {
      sourceType: 'module',
      plugins: ['typescript'],
    });

    let modified = false;
    const prototypeMethods = new Map<string, Set<string>>();
    const assignments: {
      targetPrototype: string;
      sourceArg: t.ObjectExpression;
      call: t.CallExpression;
    }[] = [];

    for (const node of ast.program.body) {
      if (!t.isExpressionStatement(node)) {
        continue;
      }

      for (const expression of t.isSequenceExpression(node.expression)
        ? node.expression.expressions
        : [node.expression]) {
        if (
          !t.isCallExpression(expression) ||
          !t.isIdentifier(expression.callee, { name: '$_' }) ||
          expression.arguments.length < 2
        ) {
          continue;
        }

        const targetPrototype = getEnhancedPrototype(expression.arguments[0]);
        const sourceArg = unwrapExpression(expression.arguments[1]);
        if (targetPrototype && t.isObjectExpression(sourceArg)) {
          assignments.push({ targetPrototype, sourceArg, call: expression });
          prototypeMethods.set(
            targetPrototype,
            new Set(
              sourceArg.properties
                .map((prop) =>
                  t.isObjectProperty(prop) || t.isObjectMethod(prop)
                    ? getPropertyName(prop.key)
                    : undefined,
                )
                .filter((methodName): methodName is string => !!methodName),
            ),
          );
        }
      }
    }

    for (const { targetPrototype, sourceArg } of assignments) {
      const originalProperties = sourceArg.properties.length;
      sourceArg.properties = sourceArg.properties.filter((prop) => {
        if (!t.isObjectProperty(prop) && !t.isObjectMethod(prop)) {
          return true;
        }

        const methodName = getPropertyName(prop.key);
        if (
          !methodName ||
          isMethodUsed(targetPrototype, methodName, usedMethods, prototypeMethods)
        ) {
          return true;
        }

        if (options.debug) {
          console.log(`[zed-gpui] Removing unused method: ${targetPrototype}.${methodName}`);
        }
        return false;
      });

      if (sourceArg.properties.length !== originalProperties) {
        modified = true;
        if (options.debug) {
          console.log(
            `[zed-gpui] Removed ${originalProperties - sourceArg.properties.length} unused methods from ${targetPrototype}`,
          );
        }
      }
    }

    ast.program.body = ast.program.body.filter((node) => {
      if (!t.isExpressionStatement(node)) {
        return true;
      }

      if (t.isSequenceExpression(node.expression)) {
        const expressions = node.expression.expressions.filter(
          (expression) =>
            !assignments.some(
              ({ call, sourceArg }) => call === expression && sourceArg.properties.length === 0,
            ),
        );
        if (expressions.length !== node.expression.expressions.length) {
          modified = true;
        }
        if (expressions.length === 0) {
          return false;
        }
        node.expression =
          expressions.length === 1 ? expressions[0] : t.sequenceExpression(expressions);
        return true;
      }

      const shouldRemove = assignments.some(
        ({ call, sourceArg }) => call === node.expression && sourceArg.properties.length === 0,
      );
      if (shouldRemove) {
        modified = true;
      }
      return !shouldRemove;
    });

    if (modified) {
      const output = generate(ast, {}, code);
      return {
        code: output.code,
      };
    }

    return null;
  } catch (error) {
    console.error('[zed-gpui] Failed to transform element file:', error);
    return null;
  }
}

function getEnhancedPrototype(node: t.Node): string | undefined {
  return t.isIdentifier(node) && isElementType(node.name) ? node.name : undefined;
}

function unwrapExpression(node: t.Node): t.Node {
  while (t.isTSAsExpression(node) || t.isTSTypeAssertion(node) || t.isTSNonNullExpression(node)) {
    node = node.expression;
  }
  return node;
}

function getPropertyName(node: t.Node): string | undefined {
  if (t.isIdentifier(node)) {
    return node.name;
  }
  if (t.isStringLiteral(node)) {
    return node.value;
  }
  return undefined;
}

function isMethodUsed(
  prototypeName: string,
  methodName: string,
  usedMethods: UsedMethods,
  prototypeMethods: Map<string, Set<string>>,
): boolean {
  if (
    usedMethods.unknown.has(methodName) ||
    usedMethods.byPrototype.get(prototypeName)?.has(methodName)
  ) {
    return true;
  }

  if (prototypeName !== 'HTMLElement') {
    return false;
  }

  if (keepHTMLElementMethods.has(methodName)) {
    return true;
  }

  for (const [usedPrototype, methods] of usedMethods.byPrototype) {
    if (
      usedPrototype !== 'HTMLElement' &&
      methods.has(methodName) &&
      !prototypeMethods.get(usedPrototype)?.has(methodName)
    ) {
      return true;
    }
  }

  return false;
}

function formatUsedMethods(usedMethods: UsedMethods) {
  return {
    unknown: Array.from(usedMethods.unknown).sort(),
    byPrototype: Object.fromEntries(
      Array.from(usedMethods.byPrototype.entries()).map(([prototype, methods]) => [
        prototype,
        Array.from(methods).sort(),
      ]),
    ),
  };
}

export default zedGpuiPlugin;
