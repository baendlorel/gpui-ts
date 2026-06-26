import './element.js';

export const h = <T extends keyof HTMLElementTagNameMap>(tag: T): HTMLElementTagNameMap[T] =>
  document.createElement(tag);

export const div = () => document.createElement('div');
export const span = () => document.createElement('span');
export const section = () => document.createElement('section');
export const p = () => document.createElement('p');
export const input = () => document.createElement('input');
export const textarea = () => document.createElement('textarea');
export const btn = () => document.createElement('button');
