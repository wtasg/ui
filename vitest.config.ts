import path from "node:path";
import { defineConfig } from "vitest/config";
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      reportsDirectory: "coverage",
      include: ["src/packages/ui/src/**/*.{ts,tsx}"]
    },
    projects: [
      {
        extends: true,
        test: {
          name: 'unit',
          include: ["tests/unit/**/*.test.ts", "tests/unit/**/*.test.tsx"],
        }
      },
      {
        extends: true,
        plugins: [
          react(),
          storybookTest({
            configDir: path.join(dirname, '.storybook')
          })
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: 'playwright',
            instances: [{
              browser: 'chromium'
            }]
          },
          setupFiles: ['.storybook/vitest.setup.ts']
        }
      }
    ]
  },
  resolve: {
    alias: {
      "@repo/ui": path.resolve(__dirname, "src/packages/ui/src"),
    },
    dedupe: ['react', 'react-dom']
  }
});