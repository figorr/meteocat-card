import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/meteocat-card.js",
  output: {
    file: "dist/meteocat-card.js",
    format: "es",
    sourcemap: false,
  },
  plugins: [
    resolve(),
    commonjs(),
    terser(),
  ],
};
