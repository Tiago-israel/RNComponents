import type { Meta, StoryObj } from "@storybook/react";
import { Gradient } from "./gradient";

const meta: Meta<typeof Gradient> = {
  title: "Components/Gradient",
  component: Gradient,
  tags: ["autodocs"],
  argTypes: {
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Gradient>;

export const Default: Story = {
  args: {
  },
};