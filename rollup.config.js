
import copy from 'rollup-plugin-copy';
import json from '@rollup/plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  output: [   
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    json(),
    terser(),
    copy({
        targets: [{ src: 'src/E2BData.json', dest: 'dist/E2BData.json' }], 
      }),
  ],
};
