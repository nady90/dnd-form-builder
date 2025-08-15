import { IFormBuilderNavbar } from "./FormBuilderNavbar";

const base: IFormBuilderNavbar = {
  title: "Form Builder",
  description: "Add and customize forms for your needs",
  savedAt: new Date(),
  link: "https://formcore.com/share/job/front-end/121FFb2d1CCR/new/long",
  closeBtnFn: () => {},
  deletFn: () => {},
  previewFn: () => {},
  saveFn: () => {},
};

export const mockFormBuilderNavbarProps = {
  base,
};
