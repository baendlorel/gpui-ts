# unplugin-gpuj-treeshake

> 🌳 Tree-shaking optimization plugin for gpuj framework

Remove unused gpuj methods from your bundle to reduce bundle size.

## Features

- 🚀 **Bundle Size Optimization**: Removes unused gpuj methods automatically
- 🔍 **Usage Analysis**: Analyzes your code to find which gpuj methods are actually used
- 📦 **Unplugin Support**: Works with Vite, Webpack, Rollup, esbuild, and more
- ⚡ **Zero Config**: Works out of the box with sensible defaults
- 🛠️ **TypeScript Support**: Full TypeScript support

## Installation

```bash
npm install unplugin-gpuj-treeshake -D
```

```bash
pnpm add unplugin-gpuj-treeshake -D
```

```bash
yarn add unplugin-gpuj-treeshake -D
```

## Usage

### Vite

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import gpujTreeshake from 'unplugin-gpuj-treeshake/vite';

export default defineConfig({
  plugins: [
    gpujTreeshake({
      // options (optional)
      debug: false, // Enable debug logging
    }),
  ],
});
```

### Webpack

```javascript
// webpack.config.js
const gpujTreeshake = require('unplugin-gpuj-treeshake/webpack');

module.exports = {
  plugins: [
    gpujTreeshake({
      // options (optional)
      debug: false,
    }),
  ],
};
```

### Rollup

```javascript
// rollup.config.js
import gpujTreeshake from 'unplugin-gpuj-treeshake/rollup';

export default {
  plugins: [
    gpujTreeshake({
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
import gpujTreeshake from 'unplugin-gpuj-treeshake/esbuild';

build({
  plugins: [
    gpujTreeshake({
      // options (optional)
      debug: false,
    }),
  ],
});
```

## Options

### `gpujPackageName`

- Type: `string`
- Default: `'gpuj'`

The name of the gpuj package in your dependencies.

### `elementPath`

- Type: `string`
- Default: `'gpuj/element'`

Path to the element.ts file in the gpuj package.

### `debug`

- Type: `boolean`
- Default: `false`

Enable debug logging to see which methods are being removed.

## How it works

1. **Analysis Phase**: The plugin scans all your source files to find which gpuj methods are actually being used (like `.flex()`, `.w()`, `.h()`, etc.)

2. **Optimization Phase**: When the bundler processes the gpuj `element.ts` file, the plugin removes all unused method definitions from `Object.assign(HTMLElement.prototype, {...})`

3. **Result**: Your final bundle only contains the gpuj methods that you actually use

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
