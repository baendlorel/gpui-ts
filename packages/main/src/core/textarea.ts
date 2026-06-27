import { enhance } from '../common/enhance.js';

declare global {
  interface HTMLTextAreaElement {
    placeholder_(value: string): this;
    value_(value: string): this;
    rows_(rows: number): this;
    cols_(cols: number): this;
    disabled_(disabled?: boolean): this;
    focus_(): this;
    blur_(): this;
    select_(): this;
    onChange_(
      handler: (
        event: Event & { currentTarget: HTMLTextAreaElement; target: HTMLTextAreaElement },
      ) => void,
    ): this;
    onInput_(
      handler: (
        event: Event & { currentTarget: HTMLTextAreaElement; target: HTMLTextAreaElement },
      ) => void,
    ): this;
  }
}
enhance(HTMLTextAreaElement, {
  placeholder_(value) {
    this.placeholder = value;
    return this;
  },
  value_(value) {
    this.value = value;
    return this;
  },
  rows_(rows) {
    this.rows = rows;
    return this;
  },
  cols_(cols) {
    this.cols = cols;
    return this;
  },
  disabled_(disabled = true) {
    this.disabled = disabled;
    return this;
  },
  focus_() {
    this.focus();
    return this;
  },
  blur_() {
    this.blur();
    return this;
  },
  select_() {
    this.select();
    return this;
  },
  onChange_(handler) {
    return this.on_('change', handler as EventListener);
  },
  onInput_(handler) {
    return this.on_('input', handler as EventListener);
  },
} as HTMLTextAreaElement);
export {};
