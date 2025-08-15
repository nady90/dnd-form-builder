import "../src/app/globals.css";

import type { Preview } from "@storybook/nextjs-vite";

import { Toaster } from "../src/components/ui/sonner";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
  decorators: [
    // 👇 Defining the decorator in the preview file applies it to all stories
    (Story, { parameters }) => {
      // 👇 Make it configurable by reading from parameters
      const { pageLayout } = parameters;
      switch (pageLayout) {
        case "page":
          return (
            // Your page layout is probably a little more complex than this ;)
            <div className={`font-inter antialiased`}>
              <Story />
            </div>
          );
        case "page-mobile":
          return (
            <div className={`font-inter antialiased`}>
              <Story />
            </div>
          );
        default:
          // In the default case, don't apply a layout
          return (
            // Your page layout is probably a little more complex than this ;)
            <div className={`font-inter antialiased`}>
              <Toaster />
              <Story />
            </div>
          );
      }
    },
  ],
};

export default preview;
