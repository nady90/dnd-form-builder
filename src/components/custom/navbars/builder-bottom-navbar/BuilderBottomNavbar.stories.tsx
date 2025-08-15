import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, screen, userEvent } from "storybook/test";

import { assertInterFontForAllText } from "@/test/test-utils";

import BuilderBottomNavbar from "./BuilderBottomNavbar";
import { mockBuilderBottomNavbarProps } from "./BuilderBottomNavbar.mocks";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/ Navbars/ Build Bottom Navbar",
  component: BuilderBottomNavbar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  play: async ({ canvasElement, step }) => {
    await step("Font family should be Inter", async () => {
      assertInterFontForAllText(canvasElement);
    });
  },
} satisfies Meta<typeof BuilderBottomNavbar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    ...mockBuilderBottomNavbarProps.base,
  },
};

export const CopyLink: Story = {
  args: {
    ...mockBuilderBottomNavbarProps.base,
  },
  play: async ({ context, step }) => {
    await meta.play!(context);

    const copyIcon = await screen.findByRole("button", {
      name: "copy link",
    });
    await step("The copy link icon should be on the page", async () => {
      await expect(copyIcon).toBeInTheDocument();
    });

    await step(
      "When clicking on the copy icon, a toast should appear",
      async () => {
        await expect(copyIcon).toBeInTheDocument();
        await userEvent.click(copyIcon);
        const toast = await screen.getByText(/Copied text to clipboard/i);
        expect(toast).toBeInTheDocument();
      },
    );
  },
};
