import { defineConfig } from "vite";

export default defineConfig({
  base: "/arachnide",
  build: {
    outDir: "../docs"
  },
  server: {
    port: 8000,
    host: true
  }
});
