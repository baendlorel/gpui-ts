declare global {
  interface HTMLDetailsElement {
    open_(open?: boolean): this;
  }
}
Object.assign(HTMLDetailsElement.prototype, {
  open_(open = true) {
    this.open = open;
    return this;
  },
} as HTMLDetailsElement);
export {};
