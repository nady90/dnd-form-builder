import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import FormContextProvider from "@/contexts/FormContext";
import { assertInterFontForAllText } from "@/test/test-utils";

import ElementsBuilder from "./ElementsBuilder";
import { mockElementsBuilderProps } from "./ElementsBuilder.mocks";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Sections/ Builder/ Elements Builder",
  component: ElementsBuilder,
  decorators: [
    (Story) => (
      <FormContextProvider>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </FormContextProvider>
    ),
  ],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    // layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  play: async ({ canvasElement, step }) => {
    await step("Font family should be Inter", async () => {
      assertInterFontForAllText(canvasElement);
    });
  },
} satisfies Meta<typeof ElementsBuilder>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    ...mockElementsBuilderProps.base,
  },
};
