export class HTMLBuilder {
  private _tag: string;
  private _className?: string;
  private _style: CSSStyleDeclaration = new CSSStyleDeclaration();

  constructor(tag: string) {
    this._tag = tag;
  }

  class(classList: string[]): this;
  class(className: string): this;
  class(c: string | string[]) {
    if (typeof c === 'string') {
      this._className = c;
    } else if (Array.isArray(c)) {
      this._className = c.join(' ');
    } else {
      $throw('Invalid argument type');
    }
    return this;
  }

  style(style: CSSStyleDeclaration): this;
  style(style: string): this;
  style(s: string | CSSStyleDeclaration) {
    if (typeof s === 'string') {
      this._style.cssText = s;
    } else if (s instanceof CSSStyleDeclaration) {
      this._style = s;
    } else {
      $throw('style Invalid argument type');
    }
    return this;
  }

  w(w: string): this {
    this._style.width = w;
    return this;
  }

  h(h: string): this {
    this._style.height = h;
    return this;
  }

  build() {
    const e = document.createElement(this._tag);
    if (this._className) {
      e.className = this._className;
    }
    e.style.cssText = this._style.cssText;
    return e;
  }
}
