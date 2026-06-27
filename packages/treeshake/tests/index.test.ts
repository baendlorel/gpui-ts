import { describe, expect, it } from 'vitest';
import { zedGpuiPlugin } from '../src/index';

type PluginInstance = {
  transform: (code: string, id: string) => null | { code: string } | string;
};

const elementCode = `
$_(HTMLElement, {
  class_() {},
  value_() {},
  disabled_() {},
  on_() {},
  off_() {},
  unused_() {},
} as HTMLElement);

$_(HTMLInputElement, {
  value_() {},
  disabled_() {},
  placeholder_() {},
  unused_() {},
} as HTMLInputElement);

$_(HTMLButtonElement, {
  value_() {},
  disabled_() {},
  autofocus_() {},
  unused_() {},
} as HTMLButtonElement);
`;

function transformAfterAnalyze(sourceCode: string, sourceId = '/src/app.ts') {
  const plugin = zedGpuiPlugin.raw({ zedGpuiPackageName: 'zed-gpui' }) as PluginInstance;
  plugin.transform(sourceCode, sourceId);
  const result = plugin.transform(elementCode, '/packages/main/src/core/index.ts');

  if (!result || typeof result === 'string') {
    return result;
  }

  return result.code;
}

function expectKept(code: string | null, methodName: string) {
  expect(code).toContain(`${methodName}() {}`);
}

function expectRemoved(code: string | null, methodName: string) {
  expect(code).not.toContain(`${methodName}() {}`);
}

function transformRealElementAfterAnalyze(sourceCode: string) {
  const plugin = zedGpuiPlugin.raw({ zedGpuiPackageName: 'zed-gpui' }) as PluginInstance;
  plugin.transform(sourceCode, '/src/main.ts');
  const result = plugin.transform(
    `$_(HTMLElement,{id_(e){return this.id=e,this},child_(...e){return this.append(...e),this},class_(e){return this.className=e,this}}),$_(HTMLInputElement,{value_(e){return this.value=e,this}});`,
    '/node_modules/zed-gpui/dist/index.mjs',
  );

  return result && typeof result !== 'string' ? result.code : result;
}

describe('zedGpuiTreeshakePlugin', () => {
  it('removes unused HTMLElement methods but always keeps on_/off_', () => {
    const code = transformAfterAnalyze(`
      import { div } from 'zed-gpui';
      div().class_('box');
    `);

    expectKept(code, 'class_');
    expectKept(code, 'on_');
    expectKept(code, 'off_');
    expectRemoved(code, 'unused_');
  });

  it('keeps methods on the exact confirmed element prototype', () => {
    const code = transformAfterAnalyze(`
      import { input, btn } from 'zed-gpui';
      input().value_('hello');
      btn().disabled_();
    `);

    expect(code).toContain('$_(HTMLInputElement,');
    expect(code).toContain('$_(HTMLButtonElement,');
    expect(code).toMatch(/HTMLInputElement,[\s\S]*value_\(\) \{\}/);
    expect(code).not.toMatch(
      /HTMLInputElement,[\s\S]*disabled_\(\) \{\}[\s\S]*\} as HTMLInputElement/,
    );
    expect(code).toMatch(/HTMLButtonElement,[\s\S]*disabled_\(\) \{\}/);
    expect(code).not.toMatch(
      /HTMLButtonElement,[\s\S]*value_\(\) \{\}[\s\S]*\} as HTMLButtonElement/,
    );
  });

  it('infers element type from document.createElement and h(tag)', () => {
    const code = transformAfterAnalyze(`
      import { h } from 'zed-gpui';
      document.createElement('input').placeholder_('name');
      h('button').autofocus_();
    `);

    expect(code).toMatch(/HTMLInputElement,[\s\S]*placeholder_\(\) \{\}/);
    expect(code).toMatch(/HTMLButtonElement,[\s\S]*autofocus_\(\) \{\}/);
    expect(code).not.toMatch(
      /HTMLInputElement,[\s\S]*autofocus_\(\) \{\}[\s\S]*\} as HTMLInputElement/,
    );
  });

  it('falls back to method-name based preservation when type is unknown', () => {
    const code = transformAfterAnalyze(`
      import 'zed-gpui';
      getElement().value_('unknown');
    `);

    expect(code).toMatch(/HTMLElement,[\s\S]*value_\(\) \{\}/);
    expect(code).toMatch(/HTMLInputElement,[\s\S]*value_\(\) \{\}/);
    expect(code).toMatch(/HTMLButtonElement,[\s\S]*value_\(\) \{\}/);
    expectRemoved(code, 'unused_');
  });

  it('transforms bundled sequence expressions and querySelector typed usage', () => {
    const code = transformRealElementAfterAnalyze(`
      import 'zed-gpui';
      document.querySelector<HTMLDivElement>('#app')!.child_('aasdf', 'fds');
    `);

    expect(code).toContain('child_(...e)');
    expect(code).not.toContain('id_(e)');
    expect(code).not.toContain('class_(e)');
    expect(code).not.toContain('value_(e)');
    expect(code).not.toContain('HTMLInputElement');
  });

  it('removes empty $_ calls from sequence expressions', () => {
    const code = transformRealElementAfterAnalyze(`
      import 'zed-gpui';
      document.querySelector<HTMLDivElement>('#app')!.child_('aasdf', 'fds');
    `);

    expect(code).toContain('$_(HTMLElement');
    expect(code).not.toContain('$_(HTMLInputElement, {})');
  });

  it('uses TypeScript annotations to identify exact element methods', () => {
    const code = transformAfterAnalyze(`
      import 'zed-gpui';
      const field: HTMLInputElement = getInput();
      field.disabled_();
    `);

    expect(code).toMatch(/HTMLInputElement,[\s\S]*disabled_\(\) \{\}/);
    expect(code).not.toMatch(
      /HTMLButtonElement\.prototype,[\s\S]*disabled_\(\) \{\}[\s\S]*\} as HTMLButtonElement/,
    );
  });
});
