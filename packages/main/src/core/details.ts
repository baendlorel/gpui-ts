import { enhance } from '../common/enhance.js';

declare global {
  interface HTMLDetailsElement {
    open_(open?: boolean): this;
  }
}
enhance(HTMLDetailsElement, {
  open_(open = true) {
    this.open = open;
    return this;
  },
} as HTMLDetailsElement);
export {};
