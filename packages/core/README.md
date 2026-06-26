# jpui

[![npm version](https://img.shields.io/npm/v/jpui.svg)](https://www.npmjs.org/package/jpui)
[![npm downloads](https://img.shields.io/npm/dm/jpui.svg)](https://www.npmjs.org/package/jpui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<p align="center">
  <img src="../../assets/icon.png" width="240px" alt="jpui logo" />
</p>

> A functional web front-end framework with gpui-inspired syntax

jpui is a lightweight, functional web framework that provides an elegant, chainable API for building HTML elements with JavaScript/TypeScript. Inspired by the gpui philosophy, it offers a fluent interface for styling, event handling, and DOM manipulation.

## Features

- 🎨 **Rich styling API** - Flexbox, Grid, spacing, colors, typography, and more
- ⚡ **Event handling** - Comprehensive event listeners (mouse, keyboard, touch, drag & drop, etc.)
- 🔧 **Type-safe** - Full TypeScript support with type inference
- 📦 **Auto-injection** - Optional inject module for seamless DOM integration
- 🪶 **Lightweight** - Zero dependencies, tree-shakeable

## Installation

```bash
pnpm add jpui
```

## Quick Start

```typescript
import { div, p, btn } from 'jpui';

// Create elements with chained styling
const container = div()
  .flex()
  .gap('1rem')
  .p('2rem')
  .bg('#f0f0f0');

const title = p()
  .textSize('1.5rem')
  .text('#333')
  .text('Hello, jpui!');

const button = btn()
  .px('1rem')
  .py('0.5rem')
  .bg('#007bff')
  .text('#fff')
  .rounded('0.25rem')
  .cursorPointer()
  .onClick(() => console.log('Clicked!'))
  .text('Click Me');

// Build and append to DOM
document.body.append(
  container.build(),
  title.build(),
  button.build()
);
```

## Auto-injection Mode

For automatic `build()` calling, import the inject module:

```typescript
import 'jpui/inject';
import { div, p, btn } from 'jpui';

// Now you can use HTMLBuilder directly with DOM methods
document.body.append(
  div().flex().p('2rem'),
  p().text('Auto-builded!')
);
```

## API Overview

### Element Creation

```typescript
div()    // <div>
span()   // <span>
section()// <section>
p()      // <p>
btn()    // <button>
```

### Layout & Display

```typescript
.flex()                    // display: flex
.flexDirection('column')  // flex-direction
.grid()                    // display: grid
.gridTemplateColumns('1fr 1fr')
.block()                   // display: block
.hidden()                  // display: none
```

### Spacing

```typescript
.p('1rem')              // padding
.px('1rem')             // padding-left & right
.py('1rem')             // padding-top & bottom
.m('1rem')              // margin
.mx('auto')             // margin-left & right
.gap('1rem')            // gap (for flex/grid)
```

### Sizing

```typescript
.w('100%')              // width
.h('100px')            // height
.size('50px', '50px')  // width & height
.minW('200px')         // min-width
.maxW('100%')          // max-width
```

### Colors & Backgrounds

```typescript
.bg('#fff')                    // background-color
.bgImage('url(...)')           // background-image
.text('#333')                 // color
.borderColor('#ccc')          // border-color
```

### Typography

```typescript
.textSize('1rem')        // font-size
.fontWeight('bold')      // font-weight
.textAlign('center')     // text-align
.lineHeight('1.5')       // line-height
.truncate()              // text-overflow: ellipsis
```

### Events

```typescript
.onClick((e) => {})
.onKeyDown((e) => {})
.onMouseDown((e) => {})
.onTouchStart((e) => {})
.onDrag((e) => {})
.onScroll((e) => {})
.on('customEvent', handler)
```

## License

MIT

---

**GitHub**: [baendlorel/jpui](https://github.com/baendlorel/jpui)
