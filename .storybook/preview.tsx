import React from "react";
import type { Preview } from "@storybook/react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { View } from "react-native";

const preview: Preview = {
  decorators: [
    (Story) => (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 16 }}>
          <Story />
        </View>
      </GestureHandlerRootView>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#1a1a1a" },
      ],
    },
  },
};

export default preview;
