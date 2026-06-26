declare global {
  interface HTMLLabelElement {
    for_(htmlFor: string): this;
  }
}
Object.assign(HTMLLabelElement.prototype, {
  for_(htmlFor) {
    this.htmlFor = htmlFor;
    return this;
  },
} as HTMLLabelElement);
export {};
