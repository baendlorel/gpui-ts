import { defineConfig } from 'vite';
import zedGpuiTreeshake from '../treeshake/src/vite.js';

export default defineConfig({
  plugins: [
    zedGpuiTreeshake({
      // Enable debug logging to see which methods are being removed
      debug: true,

      // Optional: customize the zed-gpui package name
      // zedGpuiPackageName: 'zed-gpui',

      // Optional: customize the element file path
      // elementPath: 'zed-gpui/element',
    }),
  ],
  build: {
    // Enable minification to see the size reduction
    minify: 'terser',
    // Generate source maps for debugging
    sourcemap: true,
  },
});
