import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/js/app.js",
  output: [
    {
      file: "public/js/app-bundle.js",
      format: "iife",
      plugins: [commonjs()],
    },
    {
      file: "public/js/app-bundle.min.js",
      format: "iife",
      name: "version",
      plugins: [commonjs(), terser()],
    },
  ],
};
