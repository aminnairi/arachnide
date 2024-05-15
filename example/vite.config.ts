import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
  plugins: [
    legacy()
  ],
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
