declare global {
  interface HTMLAnchorElement {
    href_(href: string): this;
    target_(target: string): this;
    rel_(rel: string): this;
    download_(download?: string): this;
    referrerPolicy_(policy: ReferrerPolicy): this;
  }
}
Object.assign(HTMLAnchorElement.prototype, {
  href_(href) {
    this.href = href;
    return this;
  },
  target_(target) {
    this.target = target;
    return this;
  },
  rel_(rel) {
    this.rel = rel;
    return this;
  },
  download_(download = '') {
    this.download = download;
    return this;
  },
  referrerPolicy_(policy) {
    this.referrerPolicy = policy;
    return this;
  },
} as HTMLAnchorElement);
export {};
