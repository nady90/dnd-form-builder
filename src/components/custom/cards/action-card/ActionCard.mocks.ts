import { IActionCard } from "./ActionCard";

const base: IActionCard = {
  text: "Start From Scratch",
  subText: "Jump right in and build something beautiful",
  variant: "add",
};

const template: IActionCard = {
  text: "Use Template",
  subText: "Use a template to create and send a survey faster",
  variant: "template",
};

export const mockActionCardProps = {
  base,
  template,
};
