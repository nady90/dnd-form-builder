import { IAllFormsSection } from "./AllFormsSection";

const base: IAllFormsSection = {
  data: [
    {
      responses: "99 Responses",
      category: "Sales Form",
      name: "John Mark",
    },
    {
      responses: "99 Responses",
      category: "Sales Form",
      name: "John Mark",
    },
    {
      responses: "99 Responses",
      category: "Sales Form",
      name: "John Mark",
    },
    {
      responses: "99 Responses",
      category: "Sales Form",
      name: "John Mark",
    },
  ],
  loading: false,
  status: 200,
  error: false,
};

export const mockAllFormsSectionProps = {
  base,
};
