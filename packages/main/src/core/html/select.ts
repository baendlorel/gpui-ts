declare global {
  interface HTMLSelectElement {
    value_(value: string): this;
    options_(options: Array<{ value: any; label: string }>): this;
    disabled_(disabled?: boolean): this;
    focus_(): this;
    blur_(): this;
    onChange_(
      handler: (
        event: Event & { currentTarget: HTMLSelectElement; target: HTMLSelectElement },
      ) => void,
      options?: boolean | AddEventListenerOptions,
    ): this;
    onInput_(
      handler: (
        event: Event & { currentTarget: HTMLSelectElement; target: HTMLSelectElement },
      ) => void,
      options?: boolean | AddEventListenerOptions,
    ): this;
  }
}
$_(HTMLSelectElement, {
  value_(value) {
    this.value = value;
    return this;
  },
  options_(options) {
    this.replaceChildren(
      ...options.map((option) => {
        const node = document.createElement('option');
        node.value = String(option.value);
        node.textContent = option.label;
        return node;
      }),
    );
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
  onChange_(handler, options) {
    return this.on_('change', handler as EventListener, options);
  },
  onInput_(handler, options) {
    return this.on_('input', handler as EventListener, options);
  },
} as HTMLSelectElement);
export {};
