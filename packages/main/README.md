# zed-gpui

[![npm version](https://img.shields.io/npm/v/zed-gpui.svg)](https://www.npmjs.org/package/zed-gpui)
[![npm downloads](https://img.shields.io/npm/dm/zed-gpui.svg)](https://www.npmjs.org/package/zed-gpui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<p align="center">
  <img src="../../assets/icon.png" width="240px" alt="zed-gpui logo" />
</p>

A small TypeScript / Web UI framework with a **gpui-inspired** style.

Its core characteristics are simple and explicit:

- **Chainable API**: methods return `this` so calls can be composed fluently
- **All instance methods end with `_`**: such as `flex_()`, `w_()`, `onClick_()`
- **Directly uses native DOM**: the returned value is an actual `HTMLElement`
- **Creates elements by tag**: `div()`, `btn()`, `input()`, `h('section')`
- **Adds capabilities through prototype enhancement**: styling, attributes, events, and form helpers live on native elements

## Install

```bash
pnpm add zed-gpui
```

## Design conventions

### 1. Chain-first API

Almost every method returns the current element, so the normal style is fluent chaining:

```ts
const app = div()
  .flex_()
  .items_('center')
  .justify_('center')
  .w_('100%')
  .h_('100vh')
  .bg_('#f5f5f5');
```

### 2. Every method ends with an underscore

This is one of the most recognizable parts of the library.

```ts
id_()
class_()
child_()
text_()
onClick_()
placeholder_()
```

The goal is straightforward:

- distinguish framework methods from native properties
- distinguish chainable element methods from ordinary utility functions
- make zed-gpui calls visually obvious at a glance

### 3. The result is real DOM, not a virtual node

```ts
const node = div().text_('hello');
document.body.appendChild(node);
```

`node` is a real `HTMLDivElement`, not a virtual DOM node and not an intermediate description object.

## Quick example

```ts
import { div, btn, input } from 'zed-gpui';

const app = div()
  .flex_()
  .flexDirection_('column')
  .gap_('12px')
  .items_('center')
  .justify_('center')
  .w_('100%')
  .h_('100vh');

const field = input()
  .placeholder_('Enter text...')
  .px_('12px')
  .py_('8px')
  .border_()
  .rounded_('8px')
  .w_('280px')
  .onInput_((event) => {
    console.log(event.currentTarget.value);
  });

const button = btn()
  .text_('Click me')
  .px_('16px')
  .py_('10px')
  .bg_('blue')
  .textColor_('white')
  .rounded_('8px')
  .cursorPointer_()
  .onClick_(() => {
    console.log('clicked');
  });

app.child_(field, button);
document.body.appendChild(app);
```

## API style

### Create elements

```ts
div();
span();
section();
p();
btn();
input();
textarea();
select([{ value: 1, label: 'One' }]);
h('dialog');
```

### Common capabilities

```ts
div()
  .id_('app')
  .class_('container')
  .child_(span().text_('hello'))
  .w_('320px')
  .h_('80px')
  .p_('16px')
  .rounded_('12px')
  .shadowMd_()
  .onClick_(() => {});
```

The API surface broadly includes:

- element attributes: `id_`, `attr_`, `name_`
- children and text: `child_`, `text_`
- layout: `flex_`, `grid_`, `justify_`, `items_`
- sizing and spacing: `w_`, `h_`, `p_`, `m_`, `gap_`
- border and radius: `border_`, `borderColor_`, `rounded_`
- color and typography: `bg_`, `textColor_`, `textSize_`
- positioning and overflow: `absolute_`, `top_`, `overflow_`
- events: `onClick_`, `onInput_`, `onChange_`, `on_`
- form helpers: `value_`, `placeholder_`, `checked_`, `options_`

## Good fit for

This library is a good match if you want to:

- build UI directly with **native DOM**
- use a **chainable API** for styling and events
- keep a consistent naming style with **underscore-suffixed methods**
- write lightweight pages, tools, panels, or experimental UI

## Repository structure

This repository is a monorepo and mainly contains:

- `zed-gpui`: the main runtime package
- `unplugin-zed-gpui-treeshake`: the companion tree-shaking plugin
- `@zed-gpui/example`: the example project

## License

MIT
