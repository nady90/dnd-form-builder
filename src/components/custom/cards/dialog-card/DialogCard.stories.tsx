import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Dialog } from "@/components/ui/dialog";
import { assertInterFontForAllText } from "@/test/test-utils";

import DialogCard from "./DialogCard";
import { mockDialogCardProps } from "./DialogCard.mocks";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/ Cards/ Dialog Card",
  component: DialogCard,
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
  decorators: [
    (Story) => {
      return (
        <Dialog open={true}>
          <Story />
        </Dialog>
      );
    },
  ],
} satisfies Meta<typeof DialogCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    ...mockDialogCardProps.base,
  },
};
