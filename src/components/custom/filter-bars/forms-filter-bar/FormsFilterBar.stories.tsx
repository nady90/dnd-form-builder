import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import FormsFilterBar from "./FormsFilterBar";
import { mockFormsFilterBarProps } from "./FormsFilterBar.mocks";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Filter Bars/ Forms Filter Bar",
  component: FormsFilterBar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof FormsFilterBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    ...mockFormsFilterBarProps.base,
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
