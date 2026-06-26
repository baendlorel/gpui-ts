import { createUnplugin } from 'unplugin';
import { parse } from '@babel/parser';
import * as t from '@babel/types';
import generate from '@babel/generator';

export interface PluginOptions {
  /**
   * gpuj package name or import path
   * @default 'gpuj'
   */
  gpujPackageName?: string;

  /**
   * Path to the element.ts file in gpuj package
   * @default 'gpuj/element'
   */
  elementPath?: string;

  /**
   * Enable debug logging
   * @default false
   */
  debug?: boolean;
}

const defaultOptions: PluginOptions = {
  gpujPackageName: 'gpuj',
  elementPath: 'gpuj/element',
  debug: false,
};

/**
 * Unplugin for gpuj tree-shaking optimization
 * Removes unused gpuj methods from the bundle
 */
export const gpujTreeshakePlugin = createUnplugin((options: PluginOptions = {}) => {
  const opts = { ...defaultOptions, ...options };
  const usedMethods = new Set<string>();
  let hasProcessedElement = false;

  return {
    name: 'unplugin-gpuj-treeshake',

    transform(code, id) {
      // Skip if we've already processed element.ts
      if (hasProcessedElement) {
        return null;
      }

      // Check if this is the gpuj element.ts file
      if (id.includes('element.ts') || id.includes('element.js')) {
        if (opts.debug) {
          console.log(`[gpuj-treeshake] Processing element file: ${id}`);
          console.log(`[gpuj-treeshake] Used methods (${usedMethods.size}):`, Array.from(usedMethods).sort());
        }

        hasProcessedElement = true;
        return transformElementFile(code, usedMethods, opts);
      }

      // Analyze usage in regular source files
      if (shouldProcessFile(id)) {
        analyzeUsage(code, usedMethods, opts);
      }

      return null;
    },

    buildEnd() {
      // Reset state for watch mode
      hasProcessedElement = false;
      usedMethods.clear();
    },
  };
});

/**
 * Check if a file should be analyzed for gpuj usage
 */
function shouldProcessFile(id: string): boolean {
  // Skip node_modules and dist directories
  if (id.includes('node_modules') || id.includes('dist')) {
    return false;
  }

  // Only process TypeScript and JavaScript files
  return /\.(ts|js|tsx|jsx)$/.test(id);
}

/**
 * Analyze code to find gpuj method usage
 */
function analyzeUsage(code: string, usedMethods: Set<string>, options: PluginOptions) {
  try {
    const ast = parse(code, {
      sourceType: 'module',
      plugins: ['typescript', 'jsx'],
    });

    let hasGpujImport = false;

    // First pass: check if file imports gpuj
    if (t.isProgram(ast)) {
      for (const node of ast.body) {
        if (t.isImportDeclaration(node)) {
          const source = node.source.value;
          if (source === options.gpujPackageName || source.startsWith(options.gpujPackageName + '/')) {
            hasGpujImport = true;
            break;
          }
        }
      }
    }

    if (!hasGpujImport && !hasGpujUsage(code)) {
      return;
    }

    // Second pass: find method calls on elements
    if (t.isProgram(ast)) {
      for (const node of ast.body) {
        scanNodeForMethodCalls(node, usedMethods);
      }
    }

    if (options.debug && usedMethods.size > 0) {
      console.log(`[gpuj-treeshake] Found methods in file:`, Array.from(usedMethods).sort());
    }
  } catch (error) {
    // Parse errors are expected for some files (like JSON, config files, etc.)
    if (options.debug) {
      console.warn(`[gpuj-treeshake] Failed to parse:`, error);
    }
  }
}

/**
 * Quick check if code might contain gpuj usage
 */
function hasGpujUsage(code: string): boolean {
  // Look for common patterns like .flex(), .w(), .h(), etc.
  const patterns = [
    /\.\s*([a-z_][a-zA-Z0-9_]*)\s*\(/g, // Method calls like .flex(, .w(, etc.
  ];

  for (const pattern of patterns) {
    const matches = code.match(pattern);
    if (matches && matches.length > 0) {
      return true;
    }
  }

  return false;
}

/**
 * Recursively scan AST nodes for method calls
 */
function scanNodeForMethodCalls(node: t.Node, usedMethods: Set<string>) {
  if (!node) {
    return;
  }

  // Check for member expression calls like element.flex()
  if (
    t.isCallExpression(node) &&
    t.isMemberExpression(node.callee) &&
    !t.isSuper(node.callee.object)
  ) {
    const property = node.callee.property;
    if (t.isIdentifier(property)) {
      const methodName = property.name;
      // Check if it looks like a gpuj method (camelCase or snake_case)
      if (/^[a-z][a-zA-Z0-9_]*$/.test(methodName)) {
        usedMethods.add(methodName);
      }
    }
  }

  // Recursively check child nodes
  for (const key in node) {
    if (Object.prototype.hasOwnProperty.call(node, key)) {
      const child = (node as any)[key];
      if (Array.isArray(child)) {
        child.forEach((item) => scanNodeForMethodCalls(item, usedMethods));
      } else if (typeof child === 'object' && child !== null && child.type) {
        scanNodeForMethodCalls(child, usedMethods);
      }
    }
  }
}

/**
 * Transform element.ts to remove unused methods
 */
function transformElementFile(code: string, usedMethods: Set<string>, options: PluginOptions) {
  try {
    const ast = parse(code, {
      sourceType: 'module',
      plugins: ['typescript'],
    });

    if (!t.isProgram(ast)) {
      return null;
    }

    let modified = false;

    // Find Object.assign(HTMLElement.prototype, {...}) call
    for (const node of ast.body) {
      if (t.isExpressionStatement(node) && t.isCallExpression(node.expression)) {
        const callExpr = node.expression;

        if (
          t.isMemberExpression(callExpr.callee) &&
          t.isIdentifier(callExpr.callee.object, { name: 'Object' }) &&
          t.isIdentifier(callExpr.callee.property, { name: 'assign' }) &&
          callExpr.arguments.length >= 2
        ) {
          const targetArg = callExpr.arguments[0];
          const sourceArg = callExpr.arguments[1];

          // Check if it's assigning to HTMLElement.prototype
          if (
            t.isMemberExpression(targetArg) &&
            t.isIdentifier(targetArg.object, { name: 'HTMLElement' }) &&
            t.isIdentifier(targetArg.property, { name: 'prototype' })
          ) {
            // Filter unused methods from the source object
            if (t.isObjectExpression(sourceArg)) {
              const originalProperties = sourceArg.properties.length;
              sourceArg.properties = sourceArg.properties.filter((prop) => {
                if (!t.isObjectProperty(prop) || !t.isIdentifier(prop.key)) {
                  return true; // Keep non-method properties
                }

                const methodName = prop.key.name;
                const isUsed = usedMethods.has(methodName);

                if (!isUsed && options.debug) {
                  console.log(`[gpuj-treeshake] Removing unused method: ${methodName}`);
                }

                return isUsed;
              });

              const newCount = sourceArg.properties.length;
              if (newCount !== originalProperties) {
                modified = true;
                if (options.debug) {
                  console.log(`[gpuj-treeshake] Removed ${originalProperties - newCount} unused methods`);
                }
              }
            }
          }
        }
      }
    }

    if (modified) {
      const output = generate(ast, {}, code);
      return {
        code: output.code,
        map: output.rawMappings ? { mappings: output.rawMappings } : null,
      };
    }

    return null;
  } catch (error) {
    console.error('[gpuj-treeshake] Failed to transform element file:', error);
    return null;
  }
}

export default gpujTreeshakePlugin;
