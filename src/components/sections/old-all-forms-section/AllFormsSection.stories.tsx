import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, within } from "storybook/test";

import AllFormsSection from "./AllFormsSection";
import { mockAllFormsSectionProps } from "./AllFormsSection.mocks";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Old/ Sections/ All Forms",
  component: AllFormsSection,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof AllFormsSection>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    ...mockAllFormsSectionProps.base,
  },
  decorators: [
    (Story) => {
      return (
        <div>
          <Story />
        </div>
      );
    },
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const sectionHeading = canvas.getByText("all forms");
    userEvent.click(sectionHeading);
    await expect(sectionHeading).toBeInTheDocument();
  },
};

export const OneRow: Story = {
  args: {
    ...mockAllFormsSectionProps.oneRow,
  },
};

export const ThreeRows: Story = {
  args: {
    ...mockAllFormsSectionProps.threeRows,
  },
};
