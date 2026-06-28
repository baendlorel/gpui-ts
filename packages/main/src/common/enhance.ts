globalThis.$_ = (c, o) => Object.assign(c.prototype, o);

let dfn = (c: { prototype: Element }, v: unknown) =>
  Object.defineProperty(c.prototype, 'gpui', { value: v });

dfn(HTMLElement, 'html');
dfn(SVGElement, 'svg');
dfn(MathMLElement, 'mathml');

dfn = null as any;

declare global {
  function $_(c: { prototype: Element }, o: unknown): void;

  interface Element {
    gpui: string;
  }
}
