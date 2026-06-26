/**
 * Inject script to extend append/appendChild methods to support HTMLBuilder
 * 自动为 HTMLBuilder 调用 build() 方法
 */

import { HTMLBuilder } from './element';

// Convert HTMLBuilder to HTMLElement if needed
function toHTMLElement(value: unknown): HTMLElement | Text | string | unknown {
  if ((value as any)?.isGpuiTs) {
    return (value as HTMLBuilder<any>).build();
  }
  return value;
}

// #region Type extensions

/**
 * Extended append method that accepts HTMLBuilder
 */
declare global {
  interface HTMLElement {
    append(...nodes: (HTMLElement | Text | string | HTMLBuilder<any>)[]): void;
    appendChild(child: HTMLElement | Text | HTMLBuilder<any>): HTMLElement;
    insertBefore(node: HTMLElement | Text | HTMLBuilder<any>, child: HTMLElement | null): HTMLElement;
    replaceChild(newChild: HTMLElement | Text | HTMLBuilder<any>, oldChild: HTMLElement): HTMLElement;
  }

  interface Document {
    append(...nodes: (HTMLElement | Text | string | HTMLBuilder<any>)[]): void;
    appendChild(child: HTMLElement | Text | HTMLBuilder<any>): HTMLElement;
    insertBefore(node: HTMLElement | Text | HTMLBuilder<any>, child: HTMLElement | null): HTMLElement;
  }

  interface DocumentFragment {
    append(...nodes: (HTMLElement | Text | string | HTMLBuilder<any>)[]): void;
    appendChild(child: HTMLElement | Text | HTMLBuilder<any>): HTMLElement;
    insertBefore(node: HTMLElement | Text | HTMLBuilder<any>, child: HTMLElement | null): HTMLElement;
  }

  interface Element {
    append(...nodes: (HTMLElement | Text | string | HTMLBuilder<any>)[]): void;
    appendChild(child: HTMLElement | Text | HTMLBuilder<any>): HTMLElement;
    insertBefore(node: HTMLElement | Text | HTMLBuilder<any>, child: HTMLElement | null): HTMLElement;
    replaceChild(newChild: HTMLElement | Text | HTMLBuilder<any>, oldChild: HTMLElement): HTMLElement;
    prepend(...nodes: (HTMLElement | Text | string | HTMLBuilder<any>)[]): void;
    after(...nodes: (HTMLElement | Text | string | HTMLBuilder<any>)[]): void;
    before(...nodes: (HTMLElement | Text | string | HTMLBuilder<any>)[]): void;
    replaceWith(...nodes: (HTMLElement | Text | string | HTMLBuilder<any>)[]): void;
  }
}

// #endregion

// #region Runtime injection

/**
 * Inject HTMLBuilder support into DOM methods
 */
export function injectBuilderSupport(): void {
  // Only inject once
  if ((globalThis as any).__builderInjected__) {
    return;
  }

  (globalThis as any).__builderInjected__ = true;

  // Inject HTMLElement methods
  const originalAppend = HTMLElement.prototype.append;
  const originalAppendChild = HTMLElement.prototype.appendChild;
  const originalInsertBefore = HTMLElement.prototype.insertBefore;
  const originalReplaceChild = HTMLElement.prototype.replaceChild;
  const originalPrepend = HTMLElement.prototype.prepend;
  const originalAfter = HTMLElement.prototype.after;
  const originalBefore = HTMLElement.prototype.before;
  const originalReplaceWith = HTMLElement.prototype.replaceWith;

  HTMLElement.prototype.append = function (
    this: HTMLElement,
    ...nodes: (HTMLElement | Text | string | HTMLBuilder<any>)[]
  ) {
    const convertedNodes = nodes.map(toHTMLElement);
    return originalAppend.apply(this, convertedNodes as any);
  };

  HTMLElement.prototype.appendChild = function (this: HTMLElement, child: HTMLElement | Text | HTMLBuilder<any>) {
    const convertedChild = toHTMLElement(child);
    return originalAppendChild.call(this, convertedChild as any);
  };

  HTMLElement.prototype.insertBefore = function (
    this: HTMLElement,
    node: HTMLElement | Text | HTMLBuilder<any>,
    child: HTMLElement | null,
  ) {
    const convertedNode = toHTMLElement(node);
    return originalInsertBefore.call(this, convertedNode as any, child);
  };

  HTMLElement.prototype.replaceChild = function (
    this: HTMLElement,
    newChild: HTMLElement | Text | HTMLBuilder<any>,
    oldChild: HTMLElement,
  ) {
    const convertedNewChild = toHTMLElement(newChild);
    return originalReplaceChild.call(this, convertedNewChild as any, oldChild);
  };

  HTMLElement.prototype.prepend = function (
    this: HTMLElement,
    ...nodes: (HTMLElement | Text | string | HTMLBuilder<any>)[]
  ) {
    const convertedNodes = nodes.map(toHTMLElement);
    return originalPrepend.apply(this, convertedNodes as any);
  };

  HTMLElement.prototype.after = function (
    this: HTMLElement,
    ...nodes: (HTMLElement | Text | string | HTMLBuilder<any>)[]
  ) {
    const convertedNodes = nodes.map(toHTMLElement);
    return originalAfter.apply(this, convertedNodes as any);
  };

  HTMLElement.prototype.before = function (
    this: HTMLElement,
    ...nodes: (HTMLElement | Text | string | HTMLBuilder<any>)[]
  ) {
    const convertedNodes = nodes.map(toHTMLElement);
    return originalBefore.apply(this, convertedNodes as any);
  };

  HTMLElement.prototype.replaceWith = function (
    this: HTMLElement,
    ...nodes: (HTMLElement | Text | string | HTMLBuilder<any>)[]
  ) {
    const convertedNodes = nodes.map(toHTMLElement);
    return originalReplaceWith.apply(this, convertedNodes as any);
  };

  // Inject Document methods
  const originalDocAppend = Document.prototype.append;
  const originalDocAppendChild = Document.prototype.appendChild;
  const originalDocInsertBefore = Document.prototype.insertBefore;

  Document.prototype.append = function (this: Document, ...nodes: (HTMLElement | Text | string | HTMLBuilder<any>)[]) {
    const convertedNodes = nodes.map(toHTMLElement);
    return originalDocAppend.apply(this, convertedNodes as any);
  };

  Document.prototype.appendChild = function (this: Document, child: HTMLElement | Text | HTMLBuilder<any>) {
    const convertedChild = toHTMLElement(child);
    return originalDocAppendChild.call(this, convertedChild as any);
  };

  Document.prototype.insertBefore = function (
    this: Document,
    node: HTMLElement | Text | HTMLBuilder<any>,
    child: HTMLElement | null,
  ) {
    const convertedNode = toHTMLElement(node);
    return originalDocInsertBefore.call(this, convertedNode as any, child);
  };

  // Inject DocumentFragment methods
  const originalFragAppend = DocumentFragment.prototype.append;
  const originalFragAppendChild = DocumentFragment.prototype.appendChild;
  const originalFragInsertBefore = DocumentFragment.prototype.insertBefore;

  DocumentFragment.prototype.append = function (
    this: DocumentFragment,
    ...nodes: (HTMLElement | Text | string | HTMLBuilder<any>)[]
  ) {
    const convertedNodes = nodes.map(toHTMLElement);
    return originalFragAppend.apply(this, convertedNodes as any);
  };

  DocumentFragment.prototype.appendChild = function (
    this: DocumentFragment,
    child: HTMLElement | Text | HTMLBuilder<any>,
  ) {
    const convertedChild = toHTMLElement(child);
    return originalFragAppendChild.call(this, convertedChild as any);
  };

  DocumentFragment.prototype.insertBefore = function (
    this: DocumentFragment,
    node: HTMLElement | Text | HTMLBuilder<any>,
    child: HTMLElement | null,
  ) {
    const convertedNode = toHTMLElement(node);
    return originalFragInsertBefore.call(this, convertedNode as any, child);
  };
}

// #endregion

// #region Auto-injection on import

// Automatically inject on module import
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  injectBuilderSupport();
}

// #endregion
