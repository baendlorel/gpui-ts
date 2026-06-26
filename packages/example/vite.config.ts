import { defineConfig } from 'vite';
import gpujTreeshake from 'unplugin-gpuj-treeshake/vite';

export default defineConfig({
  plugins: [
    gpujTreeshake({
      // Enable debug logging to see which methods are being removed
      debug: true,

      // Optional: customize the gpuj package name
      // gpujPackageName: 'zed-gpui',

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
