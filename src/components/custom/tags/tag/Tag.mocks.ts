import { ITag } from "./Tag";

const base: ITag = {
  text: "published",
  variant: "primary",
};

const outline: ITag = {
  text: "draft",
  variant: "outline",
};

export const mockTagProps = {
  base,
  outline,
};
