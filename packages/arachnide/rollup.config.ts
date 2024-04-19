import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import strip from "@rollup/plugin-strip";

const isProduction = process.env["NODE_ENV"] === "production";

export default defineConfig({
  input: "src/index.ts",
  plugins: [
    typescript(),
    isProduction && strip(),
    isProduction && terser()
  ],
  output: {
    file: "dist/index.js",
    format: "esm"
  }
});
