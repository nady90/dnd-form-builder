import { ClerkProvider } from "@clerk/nextjs";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { assertInterFontForAllText } from "@/test/test-utils";

import DashboardNavbar from "./DashboardNavbar";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/ Navbars/ Dashboard Navbar",
  component: DashboardNavbar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  play: ({ canvasElement }) => {
    assertInterFontForAllText(canvasElement);
  },
} satisfies Meta<typeof DashboardNavbar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  decorators: [
    (Story) => {
      return (
        <div className="">
          <ClerkProvider>
            <Story />
          </ClerkProvider>
        </div>
      );
    },
  ],
};
