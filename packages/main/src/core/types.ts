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
