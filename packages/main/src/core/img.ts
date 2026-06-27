import { enhance } from '../common/enhance.js';

declare global {
  interface HTMLImageElement {
    src_(src: string): this;
    alt_(alt: string): this;
    width_(width: number): this;
    height_(height: number): this;
    loading_(loading: 'eager' | 'lazy'): this;
    decoding_(decoding: 'sync' | 'async' | 'auto'): this;
  }
}
enhance(HTMLImageElement, {
  src_(src) {
    this.src = src;
    return this;
  },
  alt_(alt) {
    this.alt = alt;
    return this;
  },
  width_(width) {
    this.width = width;
    return this;
  },
  height_(height) {
    this.height = height;
    return this;
  },
  loading_(loading) {
    this.loading = loading;
    return this;
  },
  decoding_(decoding) {
    this.decoding = decoding;
    return this;
  },
} as HTMLImageElement);
export {};
