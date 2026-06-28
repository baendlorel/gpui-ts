import './common/enhance.js';
import './core/html/init.js';
import './core/svg/init.js';
import './core/mathml/init.js';

delete (globalThis as any).$_;

export const h = <T extends keyof HTMLElementTagNameMap>(tag: T): HTMLElementTagNameMap[T] =>
  document.createElement(tag);
export const div = () => document.createElement('div');
export const span = () => document.createElement('span');
export const section = () => document.createElement('section');
export const p = () => document.createElement('p');
export const input = () => document.createElement('input');
export const textarea = () => document.createElement('textarea');
export const btn = () => document.createElement('button');
export const select = (options: Array<{ value: any; label: string }>) =>
  document.createElement('select').options_(options);

/**
 * Creates svg related elements
 * @param tag left empty will make it an `<svg></svg>`
 */
export const svg = <T extends keyof SVGElementTagNameMap>(
  tag: T = 'svg' as any,
): SVGElementTagNameMap[T] => document.createElementNS('http://www.w3.org/2000/svg', tag);

/**
 * Creates mathml related elements
 * @param tag left empty will make it an `<mathml></mathml>`
 */
export const mathml = <T extends keyof MathMLElementTagNameMap>(
  tag: T = 'mathml' as any,
): MathMLElementTagNameMap[T] =>
  document.createElementNS('http://www.w3.org/1998/Math/MathML', tag);
