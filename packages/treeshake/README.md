# unplugin-zed-gpui-treeshake
# zed-gpui

[![npm version](https://img.shields.io/npm/v/unplugin-zed-gpui-treeshake.svg)](https://www.npmjs.org/package/unplugin-zed-gpui-treeshake)
[![npm downloads](https://img.shields.io/npm/dm/unplugin-zed-gpui-treeshakesvg)](https://www.npmjs.org/package/unplugin-zed-gpui-treeshake)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<p align="center">
  <img src="../../assets/icon.png" width="240px" alt="zed-gpui logo" />
</p>

> 🌳 Tree-shaking optimization plugin for zed-gpui framework

## Framework: [Zed Gpui](https://www.npmjs.com/package/zed-gpui)

Remove unused zed-gpui methods from your bundle to reduce bundle size.

## Features

- 🚀 **Bundle Size Optimization**: Removes unused zed-gpui methods automatically
- 🔍 **Usage Analysis**: Analyzes your code to find which zed-gpui methods are actually used
- 📦 **Unplugin Support**: Works with Vite, Webpack, Rollup, esbuild, and more
- ⚡ **Zero Config**: Works out of the box with sensible defaults
- 🛠️ **TypeScript Support**: Full TypeScript support

## Installation

```bash
npm install unplugin-zed-gpui-treeshake -D
```

```bash
pnpm add unplugin-zed-gpui-treeshake -D
```

```bash
yarn add unplugin-zed-gpui-treeshake -D
```

## Usage

### Vite

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import zedGpuiTreeshake from 'unplugin-zed-gpui-treeshake/vite';

export default defineConfig({
  plugins: [
    zedGpuiTreeshake({
      // options (optional)
      debug: false, // Enable debug logging
    }),
  ],
});
```

### Webpack

```javascript
// webpack.config.js
const zedGpuiTreeshake = require('unplugin-zed-gpui-treeshake/webpack');

module.exports = {
  plugins: [
    zedGpuiTreeshake({
      // options (optional)
      debug: false,
    }),
  ],
};
```

### Rollup

```javascript
// rollup.config.js
import zedGpuiTreeshake from 'unplugin-zed-gpui-treeshake/rollup';

export default {
  plugins: [
    zedGpuiTreeshake({
      // options (optional)
      debug: false,
    }),
  ],
};
```

### esbuild

```javascript
// esbuild.config.js
import { build } from 'esbuild';
import zedGpuiTreeshake from 'unplugin-zed-gpui-treeshake/esbuild';

build({
  plugins: [
    zedGpuiTreeshake({
      // options (optional)
      debug: false,
    }),
  ],
});
```

## Options

### `zedGpuiPackageName`

- Type: `string`
- Default: `'zed-gpui'`

The name of the zed-gpui package in your dependencies.

### `elementPath`

- Type: `string`
- Default: `'zed-gpui/element'`

Path to the element.ts file in the zed-gpui package.

### `debug`

- Type: `boolean`
- Default: `false`

Enable debug logging to see which methods are being removed.

## How it works

1. **Analysis Phase**: The plugin scans all your source files to find which zed-gpui methods are actually being used (like `.flex()`, `.w()`, `.h()`, etc.)

2. **Optimization Phase**: When the bundler processes the zed-gpui `element.ts` file, the plugin removes all unused method definitions from `Object.assign(HTMLElement.prototype, {...})`

3. **Result**: Your final bundle only contains the zed-gpui methods that you actually use

## Example

If your code only uses these methods:

```typescript
div()
  .flex()
  .w('100%')
  .h('100px')
  .onClick(() => console.log('clicked'));
```

The plugin will only keep `flex`, `w`, `h`, and `onClick` methods in the bundle, removing the other 100+ unused methods.

## License

MIT
