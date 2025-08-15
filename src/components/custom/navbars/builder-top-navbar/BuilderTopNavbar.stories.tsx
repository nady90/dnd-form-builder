import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, screen, userEvent } from "storybook/test";

import { assertInterFontForAllText } from "@/test/test-utils";

import BuilderTopNavbar from "./BuilderTopNavbar";
import { mockBuilderTopNavbarProps } from "./BuilderTopNavbar.mocks";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/ Navbars/ Build Top Navbar",
  component: BuilderTopNavbar,
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
} satisfies Meta<typeof BuilderTopNavbar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    ...mockBuilderTopNavbarProps.base,
  },
  play: async ({ context, step }) => {
    await meta.play(context);

    const title = screen.getByText(mockBuilderTopNavbarProps.base.title);
    const description = screen.getByText(
      mockBuilderTopNavbarProps.base.description,
    );

    const fieldsTab = screen.getByText(/fields/i);
    const workflowTab = screen.getByText(/workflow/i);
    const permissionsTab = screen.getByText(/permissions/i);

    const editTitleIcon = screen.getByRole("button", {
      name: "edit title",
    });

    const editDescriptionIcon = screen.getByRole("button", {
      name: "edit description",
    });

    await step("All elements should be present on the screen", async () => {
      expect(title).toBeInTheDocument();
      expect(description).toBeInTheDocument();
      expect(fieldsTab).toBeInTheDocument();
      expect(workflowTab).toBeInTheDocument();
      expect(permissionsTab).toBeInTheDocument();
      expect(editTitleIcon).toBeInTheDocument();
      expect(editDescriptionIcon).toBeInTheDocument();
    });
  },
};

export const WorkFlowSelected: Story = {
  args: {
    ...mockBuilderTopNavbarProps.base,
  },
  play: async ({ context, step }) => {
    await Primary.play!(context);
    await step(
      "When clicking on workflow, its background should change",
      async () => {
        const workflowTab = await screen.getByText(/workflow/i);
        await userEvent.click(workflowTab);

        const workFlowBackground =
          window.getComputedStyle(workflowTab).backgroundColor;
        expect(workFlowBackground).toBe("rgb(255, 255, 255)");
      },
    );
  },
};

export const PermissionsSelected: Story = {
  args: {
    ...mockBuilderTopNavbarProps.base,
  },
  play: async ({ context, step }) => {
    await Primary.play!(context);
    await step(
      "When clicking on permissions, its background should change",
      async () => {
        const permissionsTab = await screen.getByText(/permissions/i);
        const permissionsTabBgBeforeClick =
          window.getComputedStyle(permissionsTab).backgroundColor;
        await userEvent.click(permissionsTab);

        const permissionsTabBgAfterClick =
          window.getComputedStyle(permissionsTab).backgroundColor;
        expect(permissionsTabBgAfterClick).not.toBe(
          permissionsTabBgBeforeClick,
        );
      },
    );
  },
};

export const ChangeTitle: Story = {
  args: {
    ...mockBuilderTopNavbarProps.base,
  },
  play: async ({ context, step }) => {
    await Primary.play!(context);
    await step(
      "Clicking on the edit icon should move focus to an input field",
      async () => {
        const editTitleInputBeforeClick =
          await screen.queryByLabelText("change title");
        expect(editTitleInputBeforeClick).not.toBeInTheDocument();

        const editTitleIcon = await screen.getByRole("button", {
          name: "edit title",
        });
        await userEvent.click(editTitleIcon);

        const editTitleInputAfterClick =
          await screen.queryByLabelText("change title");
        expect(editTitleInputAfterClick).toBeInTheDocument();
      },
    );

    await step(
      "Changing the input for the title and clicking tab, should change the title",
      async () => {
        const editTitleIcon = await screen.getByRole("button", {
          name: "edit title",
        });
        await userEvent.click(editTitleIcon);

        const editTitleInputAfterClick =
          await screen.queryByLabelText("change title");
        expect(editTitleInputAfterClick).toBeInTheDocument();

        await userEvent.keyboard("{Control>}a{/Control}");
        await userEvent.type(editTitleInputAfterClick!, "Employment Form");
        await userEvent.tab();

        const newTitleText = await screen.getByText("Employment Form");
        expect(newTitleText).toBeInTheDocument();
      },
    );
  },
};

export const ChangeDescription: Story = {
  args: {
    ...mockBuilderTopNavbarProps.base,
  },
  play: async ({ context, step }) => {
    await Primary.play!(context);

    await step(
      "Clicking on the description edit icon should move focus to an input field",
      async () => {
        const editDescriptionInputBeforeClicking =
          screen.queryByLabelText("change description");
        expect(editDescriptionInputBeforeClicking).not.toBeInTheDocument();

        const editDescriptionIcon = screen.getByRole("button", {
          name: "edit description",
        });
        await userEvent.click(editDescriptionIcon);

        const editDescriptionInputAfterClicking =
          screen.queryByLabelText("change description");
        expect(editDescriptionInputAfterClicking).toBeInTheDocument();
      },
    );

    await step(
      "Changing the input for the description and clicking tab, should change the description",
      async () => {
        const editDescriptionInputAfterClicking =
          screen.queryByLabelText("change description");
        expect(editDescriptionInputAfterClicking).toBeInTheDocument();

        await userEvent.type(
          editDescriptionInputAfterClicking!,
          "Used for job applications.",
        );
        await userEvent.tab();

        const newDescription = await screen.getByText(
          "Used for job applications.",
        );
        expect(newDescription).toBeInTheDocument();
      },
    );
  },
};
