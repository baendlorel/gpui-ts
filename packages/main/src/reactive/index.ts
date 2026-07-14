export type { Reactive, Ref, Computed } from './ref.js';
import { Ref, Computed, type Reactive } from './ref.js';

export function ref<T>(value: T) {
  return new Ref(value);
}

export function computed<T>(getter: () => T, reactives: Reactive<unknown>[]) {
  return new Computed(getter, reactives);
}
