export interface ZedGpuiFuncional {
  // # Elements related

  attr_(attr: string, value: any): this;
  /**
   * Set an inline CSS property with `style.setProperty`.
   */
  style_(property: string, value: string): this;
  child_(...nodes: any[]): this;
  text_(text: string): this;
  remove_(): this;
  class_(className: string): this;
  on_(eventName: string, handler: EventListener): this;
  off_(eventName: string, handler: EventListener): this;

  // # Functional related
  /**
   * Do some custom modification of this element and turns itself
   */
  tap_(fn: (thisArg: this) => void): this;
  map_<T = Element>(fn: (thisArg: this) => T): this;
  /**
   * Iterator over children, simply uses `for` but caches length
   */
  iterChildren_(fn: (child: Element) => void): this;
  /**
   * Iterator over child nodes, simply uses `for` but caches length
   */
  iterChildNodes_(fn: (childNode: Node) => void): this;
}
