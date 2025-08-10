import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { assertInterFontForAllText } from "@/test/test-utils";

import ExtraLargeButton from "./ExtraLargeButton";
import { mockExtraLargeButtonProps } from "./ExtraLargeButton.mocks";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/ Buttons/ Extra Large Button",
  component: ExtraLargeButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  play: async ({ canvasElement, step }) => {
    await step("Font family should be Inter", async () => {
      assertInterFontForAllText(canvasElement);
    });
  },
} satisfies Meta<typeof ExtraLargeButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    ...mockExtraLargeButtonProps.base,
  },
};
