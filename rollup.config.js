import babel from 'rollup-plugin-babel';
import { uglify } from "rollup-plugin-uglify";
export default {
  input: 'commento.js',
  output: {
    file: 'dist/commento.js',
    format: 'iife'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    uglify()
  ]
};