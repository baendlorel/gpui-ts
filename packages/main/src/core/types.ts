export interface ZedGpuiFuncional {
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
