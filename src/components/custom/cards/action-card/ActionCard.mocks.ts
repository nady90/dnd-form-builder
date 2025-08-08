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

const importCard: IActionCard = {
  text: "Import Form",
  subText: "Convert your existing forms instantly",
  variant: "import",
};

const aiCard: IActionCard = {
  text: "Create with AI",
  subText: "Save time and create forms faster. Let AI hand the first draft",
  variant: "ai",
};

export const mockActionCardProps = {
  base,
  template,
  importCard,
  aiCard,
};
