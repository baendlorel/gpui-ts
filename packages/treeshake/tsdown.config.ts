import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  deps: {
    neverBundle: ['@babel/generator', '@babel/parser', '@babel/types'],
  },
  outExtensions: (_cx) => ({ dts: '.d.ts' }),
  clean: true,
  sourcemap: false,
  target: 'node18',
  treeshake: true,
});
