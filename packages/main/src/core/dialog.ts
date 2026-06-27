import { enhance } from '../common/enhance.js';

declare global {
  interface HTMLDialogElement {
    open_(open?: boolean): this;
    show_(): this;
    showModal_(): this;
    close_(returnValue?: string): this;
  }
}
enhance(HTMLDialogElement, {
  open_(open = true) {
    this.open = open;
    return this;
  },
  show_() {
    this.show();
    return this;
  },
  showModal_() {
    this.showModal();
    return this;
  },
  close_(returnValue) {
    this.close(returnValue);
    return this;
  },
} as HTMLDialogElement);
export {};
