declare global {
  interface HTMLButtonElement {
    type_(type: 'button' | 'submit' | 'reset'): this;
    disabled_(disabled?: boolean): this;
    name_(name: string): this;
    value_(value: string): this;
    autofocus_(autofocus?: boolean): this;
  }
}
$_(HTMLButtonElement, {
  type_(type) {
    this.type = type;
    return this;
  },
  disabled_(disabled = true) {
    this.disabled = disabled;
    return this;
  },
  name_(name) {
    this.name = name;
    return this;
  },
  value_(value) {
    this.value = value;
    return this;
  },
  autofocus_(autofocus = true) {
    this.autofocus = autofocus;
    return this;
  },
} as HTMLButtonElement);
export {};
