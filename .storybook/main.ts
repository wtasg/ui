import type { StorybookConfig } from "@storybook/react-vite";
import tailwindcss from "@tailwindcss/vite";

const config: StorybookConfig = {
  stories: [
    "../src/packages/ui/src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@chromatic-com/storybook"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config) {
    config.plugins = config.plugins || [];
    config.plugins.push(tailwindcss());
    return config;
  },
};
export default config;
