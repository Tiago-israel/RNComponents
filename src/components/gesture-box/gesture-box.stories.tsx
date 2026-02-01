import type { Meta, StoryObj } from "@storybook/react";
import { GestureBox } from "./gesture-box";

const meta: Meta<typeof GestureBox> = {
  title: "Components/GestureBox",
  component: GestureBox,
  tags: ["autodocs"],
  argTypes: {
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof GestureBox>;

export const Default: Story = {
  args: {
  },
};