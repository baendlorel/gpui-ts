import { enhance } from '../common/enhance.js';

declare global {
  interface HTMLLabelElement {
    for_(htmlFor: string): this;
  }
}
enhance(HTMLLabelElement, {
  for_(htmlFor) {
    this.htmlFor = htmlFor;
    return this;
  },
} as HTMLLabelElement);
export {};
