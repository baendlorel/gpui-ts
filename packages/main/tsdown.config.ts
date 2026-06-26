import { defineConfig } from 'tsdown';
import replace from '@rollup/plugin-replace';

const isDev = process.env.NODE_ENV === 'development';
const plugins = () => [
  (replace as any)({
    preventAssignment: true,
    delimiters: ['', ''],
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),

    // global $throw
    "$throw('": `throw new Error('[gpuj error] `,
    '$throw(`': 'throw new Error(`[gpuj error] ',
    '$throw("': `throw new Error("[gpuj error] `,
  }),
];

export default defineConfig([
  {
    entry: ['src/index.ts'],
    format: ['esm'],
    dts: true,
    clean: true,
    sourcemap: true,
    minify: !isDev,
    target: 'node24',
    treeshake: !isDev,
    plugins: plugins(),
    deps: {
      onlyBundle: ['type-narrow'],
    },
  },
]);
