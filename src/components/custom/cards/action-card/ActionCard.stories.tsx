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
      dialogHeading = await screen.findByText(/create form/i);
      await expect(dialogHeading).toBeInTheDocument();

      dialogDescription = await screen.findByText(
        /Create a new form from scratch to start collecting responses/i,
      );
      await expect(dialogDescription).toBeInTheDocument();

      dialogNameInput = await screen.findByLabelText(/Name/i);
      await expect(dialogNameInput).toBeInTheDocument();

      dialogDescriptionInput = await screen.findByLabelText(/Description/i);
      await expect(dialogDescriptionInput).toBeInTheDocument();

      dialogSaveBtn = await screen.findByRole("button", { name: /save/i });
      await expect(dialogSaveBtn).toBeInTheDocument();

      dialogCancelBtn = await screen.findByRole("button", { name: /cancel/i });
      await expect(dialogCancelBtn).toBeInTheDocument();
    });
  },
};

export const CorrectValues: Story = {
  args: {
    ...mockActionCardProps.base,
  },
  play: async ({ context, step }) => {
    await Clicked.play?.(context);
    await step("Fill the forms with correct values", async () => {
      const dialogNameInput = await screen.findByPlaceholderText(
        /Ex: Employment Form.../i,
      );
      await expect(dialogNameInput).toBeInTheDocument();
      await userEvent.type(dialogNameInput, "volunteer signup");

      const dialogDescriptionInput = await screen.findByPlaceholderText(
        /Descripe your form.../i,
      );
      await expect(dialogDescriptionInput).toBeInTheDocument();
      await userEvent.type(
        dialogDescriptionInput,
        "Join our volunteer program.",
      );
    });
    await step("The card should have NO error messages.", () => {
      const nameErrorMsg = screen.queryByText(/Name is requied./i);
      expect(nameErrorMsg).not.toBeInTheDocument();
    });
  },
};

export const MissingName: Story = {
  args: {
    ...mockActionCardProps.base,
  },
  play: async ({ context, step }) => {
    await Clicked.play?.(context);
    await step("Do NOT fill in the name", async () => {
      const dialogNameInput = await screen.findByPlaceholderText(
        /Ex: Employment Form.../i,
      );
      await expect(dialogNameInput).toBeInTheDocument();

      const dialogDescriptionInput = await screen.findByPlaceholderText(
        /Descripe your form.../i,
      );
      await expect(dialogDescriptionInput).toBeInTheDocument();
      await userEvent.type(
        dialogDescriptionInput,
        "Join our volunteer program.",
      );
    });

    await step("The form should display a required error message", async () => {
      await userEvent.tab();
      const errorMsg = await screen.findByText(/Name is requied./i);
      await expect(errorMsg).toBeInTheDocument();
    });
  },
};

export const SmallName: Story = {
  args: {
    ...mockActionCardProps.base,
  },
  play: async ({ context, step }) => {
    await Clicked.play?.(context);
    await step("Fill in the name with a two-letter value", async () => {
      const dialogNameInput = await screen.findByPlaceholderText(
        /Ex: Employment Form.../i,
      );
      await expect(dialogNameInput).toBeInTheDocument();
      await userEvent.type(dialogNameInput, "ac");

      const dialogDescriptionInput = await screen.findByPlaceholderText(
        /Descripe your form.../i,
      );
      await expect(dialogDescriptionInput).toBeInTheDocument();
      await userEvent.click(dialogDescriptionInput);
      await userEvent.type(
        dialogDescriptionInput,
        "Join our volunteer program.",
      );
    });
    await step("The form should display a length error message", async () => {
      await userEvent.tab(); // moves focus away -> triggers onBlur/onTouched
      const errorMsg = await screen.findByText(
        /Name must have at least three characters./i,
      );
      await expect(errorMsg).toBeInTheDocument();
    });
  },
};

export const Template: Story = {
  args: {
    ...mockActionCardProps.template,
  },
};

export const Import: Story = {
  args: {
    ...mockActionCardProps.importCard,
  },
};
