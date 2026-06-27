import { enhance } from '../common/enhance.js';

declare global {
  interface HTMLOptionElement {
    value_(value: string): this;
    selected_(selected?: boolean): this;
    disabled_(disabled?: boolean): this;
    label_(label: string): this;
  }
}
enhance(HTMLOptionElement, {
  value_(value) {
    this.value = value;
    return this;
  },
  selected_(selected = true) {
    this.selected = selected;
    return this;
  },
  disabled_(disabled = true) {
    this.disabled = disabled;
    return this;
  },
  label_(label) {
    this.label = label;
    return this;
  },
} as HTMLOptionElement);
export {};
