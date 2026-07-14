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
const CHECKBOXES = Symbol('zed-gpui.checkboxes');
const RADIOS = Symbol('zed-gpui.radios');

interface BoundObject {
  [CHECKBOXES]: Record<string, HTMLInputElement[]>;
  [RADIOS]: Record<string, HTMLInputElement[]>;
  [key: string]: unknown;
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
  bindCheckboxGroup_(o: any, key) {
    if (this.type !== 'checkbox') {
      _throw('bindCheckboxGroup_ should be called on a checkbox input element');
    }
    o[CHECKBOXES] ??= {};
    o[CHECKBOXES][key] ??= [];

    const group = o[CHECKBOXES][key] as HTMLInputElement[];

    let v: string[] = [];
    if (group.length === 0) {
      Object.defineProperty(o, key, {
        get: () => v,
        set: (val: string[]) => {
          v = val;
          for (const el of group) {
            el.checked = v.includes(el.value);
          }
        },
        configurable: true,
        enumerable: true,
      });
    }

    group.push(this);
    this.checked = v.includes(this.value);

    this.addEventListener('change', () => {
      const values = o[key] as string[];
      if (this.checked) {
        if (!values.includes(this.value)) {
          values.push(this.value);
        }
      } else {
        const i = values.indexOf(this.value);
        if (i !== -1) {
          values[i] = values[values.length - 1];
          values.pop();
        }
      }
    });
    return this;
  },
  bindRadioGroup_(o: any, key) {
    if (this.type !== 'radio') {
      _throw('bindRadioGroup_ should be called on a radio input element');
    }
    o[RADIOS] ??= {};
    o[RADIOS][key] ??= [];

    const group: HTMLInputElement[] = o[RADIOS][key];

    let v: string = o[key] ?? '';
    if (group.length === 0) {
      Object.defineProperty(o, key, {
        get: () => v,
        set: (newVal: string) => {
          v = newVal;
          group.forEach((e) => (e.checked = e.value === v));
        },
        configurable: true,
        enumerable: true,
      });
    }

    group.push(this);
    this.checked = this.value === o[key];
    this.addEventListener('change', () => {
      if (this.checked) {
        v = this.value;
      }
    });
    return this;
  },
} as HTMLInputElement);
export {};

// TODO TEST 待编写测试
