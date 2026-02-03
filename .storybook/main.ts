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

    const extensions = [
      ".web.js",
      ".web.jsx",
      ".web.ts",
      ".web.tsx",
      ".js",
      ".jsx",
      ".ts",
      ".tsx",
      ".json",
    ];

    return {
      ...config,
      define: {
        ...config.define,
        __DEV__: "true",
      },
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
        extensions,
        // Prefer .web.js over .js for react-native-gesture-handler and other RN libs
        extensionAlias: {
          ".js": [".web.js", ".js"],
          ".ts": [".web.ts", ".ts"],
          ".tsx": [".web.tsx", ".tsx"],
        },
      },
      optimizeDeps: {
        ...config.optimizeDeps,
        esbuildOptions: {
          ...config.optimizeDeps?.esbuildOptions,
          resolveExtensions: extensions,
          mainFields: ["browser", "module", "main"],
          define: {
            ...config.optimizeDeps?.esbuildOptions?.define,
            __DEV__: "true",
          },
        },
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
