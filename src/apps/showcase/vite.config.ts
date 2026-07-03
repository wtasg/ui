import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: "/ui/",
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@wtasnorg/ui/styles.css": path.resolve(__dirname, "../../packages/ui/src/styles/globals.css"),
      "@wtasnorg/ui": path.resolve(__dirname, "../../packages/ui/src/index.ts"),
      "@repo/ui": path.resolve(__dirname, "../../packages/ui/src"),
    },
  },
  server: {
    host: "127.0.0.1",
    port: 5173,
    strictPort: true,
  },
  build: {
    outDir: path.resolve(__dirname, "../../../io"),
    emptyOutDir: true,
  },
});
