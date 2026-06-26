declare global {
  interface HTMLProgressElement {
    value_(value: number): this;
    max_(max: number): this;
  }
  interface HTMLMeterElement {
    value_(value: number): this;
    min_(min: number): this;
    max_(max: number): this;
    low_(low: number): this;
    high_(high: number): this;
    optimum_(optimum: number): this;
  }
}
Object.assign(HTMLProgressElement.prototype, {
  value_(value) {
    this.value = value;
    return this;
  },
  max_(max) {
    this.max = max;
    return this;
  },
} as HTMLProgressElement);
Object.assign(HTMLMeterElement.prototype, {
  value_(value) {
    this.value = value;
    return this;
  },
  min_(min) {
    this.min = min;
    return this;
  },
  max_(max) {
    this.max = max;
    return this;
  },
  low_(low) {
    this.low = low;
    return this;
  },
  high_(high) {
    this.high = high;
    return this;
  },
  optimum_(optimum) {
    this.optimum = optimum;
    return this;
  },
} as HTMLMeterElement);
export {};
