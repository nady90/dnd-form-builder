import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { assertInterFontForAllText } from "@/test/test-utils";

import NavbarBtn from "./NavbarBtn";
import { mockNavbarBtnProps } from "./NavbarBtn.mocks";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/ Buttons/ Navbar Button",
  component: NavbarBtn,
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
} satisfies Meta<typeof NavbarBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SaveBtn: Story = {
  args: {
    ...mockNavbarBtnProps.saveBtn,
  },
};

export const PreviewBtn: Story = {
  args: {
    ...mockNavbarBtnProps.previewBtn,
  },
};

export const DeleteBtn: Story = {
  args: {
    ...mockNavbarBtnProps.deleteBtn,
  },
};

export const LoadingSaveBtn: Story = {
  args: {
    ...mockNavbarBtnProps.loadingSaveBtn,
  },
};

export const LoadingDeleteBtn: Story = {
  args: {
    ...mockNavbarBtnProps.loadingDeleteBtn,
  },
};
