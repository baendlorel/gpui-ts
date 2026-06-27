declare global {
  interface HTMLDetailsElement {
    open_(open?: boolean): this;
  }
}
$_(HTMLDetailsElement, {
  open_(open = true) {
    this.open = open;
    return this;
  },
} as HTMLDetailsElement);
export {};
