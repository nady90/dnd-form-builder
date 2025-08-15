import { IBuilderTopNavbar } from "./BuilderTopNavbar";

const base: IBuilderTopNavbar = {
  title: "Form Builder",
  description: "Add and customize forms for your needs",
  savedAt: new Date(),
  closeBtnFn: () => {},
};

export const mockBuilderTopNavbarProps = {
  base,
};
