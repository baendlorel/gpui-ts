export abstract class Reactive<T> {
  protected abstract value: T;

  protected listeners: Set<(newValue: T, oldValue: T) => unknown> = new Set();

  protected computes: Set<Computed<unknown>> = new Set();

  /**
   * Watcher functions will be executed without keeping order.
   */
  listen(fn: (newValue: T, oldValue: T) => unknown): void {
    this.listeners.add(fn);
  }

  unlisten(fn: (newValue: T, oldValue: T) => unknown): void {
    this.listeners.delete(fn);
  }

  /**
   * **Won't change the stored value**
   *
   * Executes all listener functions with the provided new and old values.
   */
  notify(newValue: T, oldValue: T) {
    this.listeners.forEach((v) => v(newValue, oldValue));
    this.computes.forEach((v) => v.recalculate());
  }
}

export class Ref<T> extends Reactive<T> {
  private _value: T;

  constructor(value: T) {
    super();
    this._value = value;
  }

  get value() {
    return this._value;
  }

  set value(newValue: T) {
    const old = this._value;
    this._value = newValue;
    this.notify(newValue, old);
  }
}

export class Computed<T> extends Reactive<T> {
  private _value: T;
  private getter: () => T;

  constructor(getter: () => T, reactives: Reactive<unknown>[]) {
    super();
    this.getter = getter;
    this._value = getter();

    for (let i = 0; i < reactives.length; i++) {
      // @ts-expect-error this is because computes is protected.
      reactives[i].computes.add(this);
    }
  }

  get value() {
    return this._value;
  }

  recalculate() {
    const old = this._value;
    this._value = this.getter();
    this.notify(this._value, old);
  }
}
