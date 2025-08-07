import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { assertInterFontForAllText } from "@/test/test-utils";

import ActionCard from "./ActionCard";
import { mockActionCardProps } from "./ActionCard.mocks";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/ Cards/ Action Card",
  component: ActionCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  play: ({ canvasElement }) => {
    assertInterFontForAllText(canvasElement);
  },
} satisfies Meta<typeof ActionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    ...mockActionCardProps.base,
  },
};
