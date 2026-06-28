type ActualElement = HTMLElement | SVGElement | MathMLElement;

export interface ZedGpuiFuncional extends Element {
  // # Elements related
  attr_(attr: string, value: any): this;
  style_(style: string | CSSStyleDeclaration): this;
  child_(...nodes: any[]): this;
  text_(text: string): this;
  remove_(): this;
  class_(classNames: string): this;
  classList_(classList: string[]): this;
  on_(eventName: string, handler: EventListener, options?: boolean | AddEventListenerOptions): this;
  off_(eventName: string, handler: EventListener, options?: boolean | EventListenerOptions): this;

  // # Functional related
  /**
   * Do some custom modification of this element and turns itself
   */
  tap_(fn: (thisArg: this) => void): this;
  map_<T = Element>(fn: (thisArg: this) => T): T;
  /**
   * Iterator over children, simply uses `for` but caches length
   */
  iterChildren_(fn: (child: Element) => void): this;
  /**
   * Iterator over child nodes, simply uses `for` but caches length
   */
  iterChildNodes_(fn: (childNode: Node) => void): this;
}

export const implementation = {
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

  // #region common element methods
  attr_(attr, value) {
    this.setAttribute(attr, value);
    return this;
  },
  style_(o) {
    if (typeof o === 'string') {
      (this as ActualElement).style.cssText = o;
    } else {
      Object.assign((this as ActualElement).style, o);
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
  // #endregion
} as ZedGpuiFuncional;
