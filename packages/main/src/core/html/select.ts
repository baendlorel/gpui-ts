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

    /**
     * Bind a property of an object with this element.
     * - It's a 2-way binding.
     * - 1 key can be bound only once.
     * @param o Some object.
     * @param key Key of the object.
     */
    bind_<T extends Record<string, unknown> | unknown[]>(o: T, key: keyof T): this;
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

  // bind
  bind_(o, key) {
    let privateValue: unknown = o[key];
    Object.defineProperty(o, key, {
      get: () => privateValue,
      set: (v: unknown) => {
        privateValue = v;
        this.value = v as string;
      },
      configurable: true,
      enumerable: true,
    });
    this.addEventListener('change', () => (privateValue = this.value));
    return this;
  },
} as HTMLSelectElement);
export {};
