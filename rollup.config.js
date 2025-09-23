import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";

export default [
  // Bundle para la tarjeta Meteocat
  {
    input: "src/meteocat-card.js",
    output: {
      file: "dist/meteocat-card.js",
      format: "es",
      sourcemap: false,
    },
    external: [], // No dependencias externas
    plugins: [
      resolve({ browser: true }),
      commonjs(),
      terser(), // minificación opcional
    ],
  },

  // Bundle para el editor de la tarjeta
  {
    input: "src/meteocat-card-editor.js",
    output: {
      file: "dist/meteocat-card-editor.js",
      format: "es",
      sourcemap: false,
    },
    external: [], // Sin dependencias externas
    plugins: [
      resolve({ browser: true }),
      commonjs(),
      terser(), // minificación opcional
    ],
  }
];
