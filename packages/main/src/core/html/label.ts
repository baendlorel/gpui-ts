declare global {
  interface HTMLLabelElement {
    for_(htmlFor: string): this;
  }
}
$_(HTMLLabelElement, {
  for_(htmlFor) {
    this.htmlFor = htmlFor;
    return this;
  },
} as HTMLLabelElement);
export {};
