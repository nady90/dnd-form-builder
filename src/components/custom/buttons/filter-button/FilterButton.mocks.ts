import { IFilterButton } from "./FilterButton";

const base: IFilterButton = {
  text: "Filter By",
  variant: "filter",
};

const sort: IFilterButton = {
  text: "Sort By",
  variant: "sort",
};

export const mockFilterButtonProps = {
  base,
  sort,
};
