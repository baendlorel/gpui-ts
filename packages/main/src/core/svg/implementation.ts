import type { ZedGpuiFuncional } from '../types.js';

export const implementation = {
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
  attr_(attr, value) {
    this.setAttribute(attr, value);
    return this;
  },
  style_(o) {
    if (typeof o === 'string') {
      (this as SVGElement).style.cssText = o;
    } else {
      Object.assign((this as SVGElement).style, o);
    }
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
    this.className = className;
    return this;
  },
  classList_(className) {
    this.className = className.join(' ');
    return this;
  },
  on_(eventName, handler, options) {
    this.addEventListener(eventName, handler, options);
    return this;
  },
  off_(eventName, handler, options) {
    this.removeEventListener(eventName, handler, options);
    return this;
  },
} as ZedGpuiFuncional;
