import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser"; // Usamos import por defecto

export default [
  // Meteocat Card
  {
    input: "src/meteocat-card.js",
    output: {
      file: "dist/meteocat-card.js",
      format: "es",
      sourcemap: false,
    },
    plugins: [
      resolve(),
      commonjs(),
      terser(), // minimiza el JS
    ],
  },

  // Editor de la card
  {
    input: "src/meteocat-card-editor.js",
    output: {
      file: "dist/meteocat-card-editor.js",
      format: "es",
      sourcemap: false,
    },
    plugins: [
      resolve(),
      commonjs(),
      terser(),
    ],
  },

  // Loader para instalación manual
  {
    input: "src/loader.js",
    output: {
      file: "dist/loader.js",
      format: "es",
      sourcemap: false,
    },
    plugins: [
      resolve(),
      commonjs(),
      terser(),
    ],
  },
];
