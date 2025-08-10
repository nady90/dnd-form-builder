import { CreateFormSchemaType } from "@/schemas/form";
import { sleep } from "@/test/test-utils";

import { IActionCard } from "./ActionCard";

const base: IActionCard = {
  text: "Start From Scratch",
  subText: "Jump right in and build something beautiful",
  variant: "add",
  submitHandler: async (values: CreateFormSchemaType) => {
    await sleep(100000000);
    console.log(values);
  },
};

const template: IActionCard = {
  text: "Use Template",
  subText: "Use a template to create and send a survey faster",
  variant: "template",
  submitHandler: async (values: CreateFormSchemaType) => {
    console.log(values);
  },
};

const importCard: IActionCard = {
  text: "Import Form",
  subText: "Convert your existing forms instantly",
  variant: "import",
  submitHandler: async (values: CreateFormSchemaType) => {
    console.log(values);
  },
};

const aiCard: IActionCard = {
  text: "Create with AI",
  subText: "Save time and create forms faster. Let AI hand the first draft",
  variant: "ai",
  submitHandler: async (values: CreateFormSchemaType) => {
    console.log(values);
  },
};

export const mockActionCardProps = {
  base,
  template,
  importCard,
  aiCard,
};
