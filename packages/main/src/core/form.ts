declare global {
  interface HTMLFormElement {
    action_(action: string): this;
    method_(method: 'get' | 'post' | 'dialog'): this;
    target_(target: string): this;
    enctype_(enctype: string): this;
    noValidate_(noValidate?: boolean): this;
    reset_(): this;
    submit_(): this;
    requestSubmit_(): this;
  }
}
$_(HTMLFormElement, {
  action_(action) {
    this.action = action;
    return this;
  },
  method_(method) {
    this.method = method;
    return this;
  },
  target_(target) {
    this.target = target;
    return this;
  },
  enctype_(enctype) {
    this.enctype = enctype;
    return this;
  },
  noValidate_(noValidate = true) {
    this.noValidate = noValidate;
    return this;
  },
  reset_() {
    this.reset();
    return this;
  },
  submit_() {
    this.submit();
    return this;
  },
  requestSubmit_() {
    this.requestSubmit();
    return this;
  },
} as HTMLFormElement);
export {};
