import type { StorybookConfig } from "@storybook/react-vite";
import react from "@vitejs/plugin-react";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) => {
    // Remove existing react plugins to avoid conflicts
    const filteredPlugins = config.plugins?.filter(
      (plugin) => 
        plugin && 
        typeof plugin === 'object' && 
        'name' in plugin && 
        !plugin.name?.includes('vite:react')
    ) || [];

    return {
      ...config,
      plugins: [
        ...filteredPlugins,
        react({
          jsxRuntime: 'automatic',
        }),
      ],
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          "react-native": "react-native-web",
          "react-native-linear-gradient": "react-native-web-linear-gradient",
        },
        extensions: [
          ".web.js",
          ".web.jsx",
          ".web.ts",
          ".web.tsx",
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
          ".json",
        ],
      },
    };
  },
  docs: {
    autodocs: "tag",
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};

export default config;
