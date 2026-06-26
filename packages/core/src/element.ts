export class HTMLElementBuilder {
  private _className?: string;
  private _style?: string;

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
      this._style = s;
    } else if (s instanceof CSSStyleDeclaration) {
      this._style = s.cssText;
    } else {
      $throw('style Invalid argument type');
    }
    return this;
  }
}
