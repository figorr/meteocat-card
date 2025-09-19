import terser from "@rollup/plugin-terser";

export default {
  input: "src/meteocat-card.js",
  output: {
    file: "dist/meteocat-card.js",
    format: "iife",
    name: "MeteocatCard"
  },
  plugins: [terser()]
};
