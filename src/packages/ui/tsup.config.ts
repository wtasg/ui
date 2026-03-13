import { defineConfig } from "tsup";
import path from "path";

const uiRoot = path.dirname(new URL(import.meta.url).pathname);

export default defineConfig({
    entry: [path.join(uiRoot, "src/index.ts")],
    format: ["esm", "cjs"],
    dts: {
        tsconfig: path.join(uiRoot, "tsconfig.json"),
    },
    sourcemap: true,
    clean: true,
    external: ["react", "react-dom"],
    treeshake: true,
    splitting: true,
    minify: false,
    injectStyle: false, // Don't inject, we want a separate CSS file
    esbuildOptions(options) {
        options.jsx = "automatic";
    },
});
