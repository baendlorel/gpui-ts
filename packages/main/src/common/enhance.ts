globalThis.$_ = (c, o) => Object.assign(c.prototype, o);

declare global {
  function $_(c: typeof HTMLElement, o: unknown): void;
}
