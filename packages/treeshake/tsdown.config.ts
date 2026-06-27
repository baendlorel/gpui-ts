import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  outExtensions: (_cx) => ({ dts: '.d.ts' }),
  clean: true,
  sourcemap: false,
  target: 'node18',
  treeshake: true,
});
