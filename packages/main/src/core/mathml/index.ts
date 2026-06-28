import type { ZedGpuiFuncional } from '../types.js';

declare global {
  interface MathMLElement extends ZedGpuiFuncional {
    readonly gpui: 'mathml';

    // #region attributes
    attr_(attr: string, value: any): this;
    child_(...nodes: any[]): this;
    text_(text: string): this;
    remove_(): this;
    class_(className: string): this;
    // #endregion

    // #region events
    on_(eventName: string, handler: EventListener): this;
    off_(eventName: string, handler: EventListener): this;
    // #endregion
  }
}

$_(MathMLElement, {
  // #region functional methods
  tap_(fn) {
    fn(this);
    return this;
  },
  map_(fn) {
    return fn(this);
  },
  iterChildren_(fn) {
    const len = this.children.length;
    for (let i = 0; i < len; i++) {
      fn(this.children[i]);
    }
    return this;
  },
  iterChildNodes_(fn) {
    const len = this.childNodes.length;
    for (let i = 0; i < len; i++) {
      fn(this.childNodes[i]);
    }
    return this;
  },
  // #endregion

  // #region attributes
  attr_(attr, value) {
    this.setAttribute(attr, value);
    return this;
  },
  child_(...nodes) {
    this.append(...nodes);
    return this;
  },
  text_(text) {
    this.textContent = text;
    return this;
  },
  remove_() {
    this.remove();
    return this;
  },
  class_(className) {
    this.setAttribute('class', className);
    return this;
  },
  // #endregion

  // #region events
  on_(eventName, handler) {
    this.addEventListener(eventName, handler);
    return this;
  },
  off_(eventName, handler) {
    this.removeEventListener(eventName, handler);
    return this;
  },
  // #endregion
} as MathMLElement);

export {};
