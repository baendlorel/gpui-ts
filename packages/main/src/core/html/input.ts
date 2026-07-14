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

    /**
     * Bind a property of an object with this element.
     * - It's a 2-way binding.
     * - 1 key can be bound only once.
     * @param o Some object.
     * @param key Key of the object.
     */
    bind_<T extends Record<string, unknown> | unknown[]>(o: T, key: keyof T): this;

    /**
     * Same as `bind_` but uses `input.checked`
     */
    bindChecked_<T extends Record<string, unknown> | unknown[]>(o: T, key: keyof T): this;

    /**
     * Same as `bind_` but uses `input.valueAsNumber`
     */
    bindAsNumber_<T extends Record<string, unknown> | unknown[]>(o: T, key: keyof T): this;

    /**
     * Same as `bind_` but uses `input.valueAsDate`
     */
    bindAsDate_<T extends Record<string, unknown> | unknown[]>(o: T, key: keyof T): this;

    /**
     * Change of this checkbox element will toggle the `this.value` in the result array.
     */
    bindCheckboxGroup_<T extends Record<string, unknown> | unknown[]>(o: T, key: keyof T): this;

    /**
     * Change of this radio element will toggle `o[key]` by the selected `this.value`.
     */
    bindRadioGroup_<T extends Record<string, unknown> | unknown[]>(o: T, key: keyof T): this;
  }
}
const checkboxesSym = Symbol('zed-gpui.checkboxes');
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

  bind_(o, key) {
    let v: unknown = o[key];
    Object.defineProperty(o, key, {
      get: () => v,
      set: (v: unknown) => {
        v = v;
        this.value = v as string;
      },
      configurable: true, // & This makes it can be bound more times. But will override it.
      enumerable: true,
    });
    this.addEventListener('input', () => (v = this.value));
    return this;
  },
  bindChecked_(o, key) {
    let v: unknown = o[key];
    Object.defineProperty(o, key, {
      get: () => v,
      set: (val: unknown) => {
        v = val;
        this.checked = v as boolean;
      },
      configurable: true,
      enumerable: true,
    });
    this.addEventListener('input', () => (v = this.checked));
    return this;
  },
  bindAsNumber_(o, key) {
    let v: unknown = o[key];
    Object.defineProperty(o, key, {
      get: () => v,
      set: (v: unknown) => {
        v = v;
        this.valueAsNumber = v as number;
      },
      configurable: true, // & This makes it can be bound more times. But will override it.
      enumerable: true,
    });
    this.addEventListener('input', () => (v = this.valueAsNumber));
    return this;
  },
  bindAsDate_(o, key) {
    let v: unknown = o[key];
    Object.defineProperty(o, key, {
      get: () => v,
      set: (v: unknown) => {
        v = v;
        this.valueAsDate = v as Date;
      },
      configurable: true, // & This makes it can be bound more times. But will override it.
      enumerable: true,
    });
    this.addEventListener('input', () => (v = this.valueAsDate));
    return this;
  },
  bindCheckboxGroup_(o, key) {
    if (this.type !== 'checkbox') {
      _throw('bindCheckboxGroup_ should be called on a checkbox input element');
    }
    let v: string[] = [];
    checkboxesSym; // TODO 这里如何避免覆盖前一个
    Object.defineProperty(o, key, {
      get: () => v,
      set: (val: string[]) => {
        v = val;

        this.checked = v.includes(this.value);
      },
      configurable: true,
      enumerable: true,
    });
    this.addEventListener('change', () => {
      if (this.checked) {
        if (!v.includes(this.value)) {
          v.push(this.value);
        }
        return;
      }
      const i = v.indexOf(this.value);
      if (i !== -1) {
        v[i] = v[v.length - 1];
        v.pop();
      }
    });
    return this;
  },
  bindRadioGroup_(o, key) {
    if (this.type !== 'radio') {
      _throw('bindRadioGroup_ should be called on a radio input element');
    }
    let v = o[key] as string;
    Object.defineProperty(o, key, {
      get: () => v,
      set: (val: string) => {
        v = val;
        this.checked = v === this.value;
      },
      configurable: true,
      enumerable: true,
    });
    this.addEventListener('change', () => (this.checked = v === this.value));
    return this;
  },
} as HTMLInputElement);
export {};
