import { defineConfig } from "vite";

export default defineConfig({
  plugins: [ ],
  base: "/arachnide",
  build: {
    outDir: "../docs",
    emptyOutDir: true,
    rollupOptions: {
      input: [
        "index.html",
        "404.html"
      ]
    },
  },
  server: {
    port: 8000,
    host: true
  },
  preview: {
    port: 8000,
    host: true
  }
});
