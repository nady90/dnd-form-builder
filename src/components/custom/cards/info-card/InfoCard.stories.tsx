import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import InfoCard from "./InfoCard";
import { mockInfoCardProps } from "./InfoCard.mocks";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Cards/ Info Card",
  component: InfoCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof InfoCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Published: Story = {
  args: {
    ...mockInfoCardProps.base,
  },
};

export const Draft: Story = {
  args: {
    ...mockInfoCardProps.draft,
  },
};

export const Loading: Story = {
  args: {
    ...mockInfoCardProps.loading,
  },
};
