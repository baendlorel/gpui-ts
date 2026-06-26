import { defineConfig } from 'tsdown';
import replace from '@rollup/plugin-replace';
import { join } from 'node:path';

const isDev = process.env.NODE_ENV === 'development';
const plugins = () => [
  (replace as any)({
    preventAssignment: true,
    delimiters: ['', ''],
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),

    // global $throw
    "$throw('": `throw new Error('[gpui-ts error] `,
    '$throw(`': 'throw new Error(`[gpui-ts error] ',
    '$throw("': `throw new Error("[gpui-ts error] `,
  }),
];

const libDir = process.env.LIB_DIR as string;

export default defineConfig([
  {
    entry: [join(libDir, 'src', 'index.ts')],
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
