import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { assertInterFontForAllText } from "@/test/test-utils";

import StatsSection from "./StatsSection";
import { mockStatsSectionProps } from "./StatsSection.mocks";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Sections/ Dashboard/ Stats Section",
  component: StatsSection,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  play: ({ canvasElement }) => {
    assertInterFontForAllText(canvasElement);
  },
} satisfies Meta<typeof StatsSection>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    ...mockStatsSectionProps.base,
  },
  decorators: [
    (Story) => {
      return (
        <div className="p-10">
          <Story />
        </div>
      );
    },
  ],
};

export const Loading: Story = {
  args: {
    ...mockStatsSectionProps.loading,
  },
  decorators: [
    (Story) => {
      return (
        <div className="p-10">
          <Story />
        </div>
      );
    },
  ],
};
