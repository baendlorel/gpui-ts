declare global {
  interface HTMLMediaElement {
    src_(src: string): this;
    controls_(controls?: boolean): this;
    autoplay_(autoplay?: boolean): this;
    loop_(loop?: boolean): this;
    muted_(muted?: boolean): this;
    currentTime_(time: number): this;
    volume_(volume: number): this;
    play_(): this;
    pause_(): this;
  }
}
Object.assign(HTMLMediaElement.prototype, {
  src_(src) {
    this.src = src;
    return this;
  },
  controls_(controls = true) {
    this.controls = controls;
    return this;
  },
  autoplay_(autoplay = true) {
    this.autoplay = autoplay;
    return this;
  },
  loop_(loop = true) {
    this.loop = loop;
    return this;
  },
  muted_(muted = true) {
    this.muted = muted;
    return this;
  },
  currentTime_(time) {
    this.currentTime = time;
    return this;
  },
  volume_(volume) {
    this.volume = volume;
    return this;
  },
  play_() {
    void this.play();
    return this;
  },
  pause_() {
    this.pause();
    return this;
  },
} as HTMLMediaElement);
export {};
