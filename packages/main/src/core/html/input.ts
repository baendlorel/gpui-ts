declare global {
  interface HTMLInputElement {
    placeholder_(value: string): this;
    value_(value: string): this;
    type_(type: string): this;
    checked_(checked?: boolean): this;
    disabled_(disabled?: boolean): this;
    focus_(): this;
    blur_(): this;
    select_(): this;
    onChange_(
      handler: (
        event: Event & { currentTarget: HTMLInputElement; target: HTMLInputElement },
      ) => void,
      options?: boolean | AddEventListenerOptions,
    ): this;
    onInput_(
      handler: (
        event: Event & { currentTarget: HTMLInputElement; target: HTMLInputElement },
      ) => void,
      options?: boolean | AddEventListenerOptions,
    ): this;
  }
}
$_(HTMLInputElement, {
  placeholder_(value) {
    this.placeholder = value;
    return this;
  },
  value_(value) {
    this.value = value;
    return this;
  },
  type_(type) {
    this.type = type;
    return this;
  },
  checked_(checked = true) {
    this.checked = checked;
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
  onChange_(handler, options) {
    return this.on_('change', handler as EventListener, options);
  },
  onInput_(handler, options) {
    return this.on_('input', handler as EventListener, options);
  },
} as HTMLInputElement);
export {};
