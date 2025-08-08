import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, screen, userEvent } from "storybook/test";

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
  play: async ({ canvasElement, step }) => {
    await step("Font family should be Inter", async () => {
      assertInterFontForAllText(canvasElement);
    });
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

export const Clicked: Story = {
  args: {
    ...mockActionCardProps.base,
  },
  play: async ({ canvas, step, context }) => {
    meta.play(context);
    let startFromScratchText;
    let dialogHeading;
    let dialogDescription;
    let dialogNameInput;
    let dialogDescriptionInput;
    let dialogSaveBtn;
    let dialogCancelBtn;

    await step("Story should hvae a start from scratch text", async () => {
      startFromScratchText = await canvas.findByText(/start from scratch/i);
      await expect(startFromScratchText).toBeInTheDocument();
    });

    await step("Dialog should popup when clicking the card", async () => {
      await userEvent.click(startFromScratchText!);
      dialogHeading = await canvas.findByText(/Create form/i);
      await expect(dialogHeading).toBeVisible();

      dialogDescription = await canvas.findByText(
        /Create a new form from scratch to start collecting responses/i,
      );
      await expect(dialogDescription).toBeVisible();
    });
  },
};
