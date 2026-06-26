import { HTMLBuilder } from './element.js';

export const div = () => new HTMLBuilder('div');
export const span = () => new HTMLBuilder('span');
export const section = () => new HTMLBuilder('section');
export const p = () => new HTMLBuilder('p');
export const btn = () => new HTMLBuilder('button');
