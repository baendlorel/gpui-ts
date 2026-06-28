import type { ZedGpuiFuncional } from '../types.js';

declare global {
  interface SVGElement extends ZedGpuiFuncional {
    readonly gpui: 'svg';

    // #region attributes
    fill_(fill: string): this;
    stroke_(stroke: string): this;
    // #endregion

    // #region events
    // #endregion
  }
}

$_(SVGElement, {
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
  style_(property, value) {
    this.style.setProperty(property, value);
    return this;
  },
  fill_(fill) {
    this.setAttribute('fill', fill);
    return this;
  },
  stroke_(stroke) {
    this.setAttribute('stroke', stroke);
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
} as SVGElement);

export {};
