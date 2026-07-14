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
      options?: boolean | AddEventListenerOptions,
    ): this;
    onInput_(
      handler: (
        event: Event & { currentTarget: HTMLTextAreaElement; target: HTMLTextAreaElement },
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
$_(HTMLTextAreaElement, {
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
    this.addEventListener('input', () => (privateValue = this.value));
    return this;
  },
} as HTMLTextAreaElement);
export {};
