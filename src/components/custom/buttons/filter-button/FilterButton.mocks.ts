import { IFilterButton } from "./FilterButton";

const base: IFilterButton = {
  children: "Filter By",
  variant: "filter",
};

const sort: IFilterButton = {
  children: "Sort By",
  variant: "sort",
};

export const mockFilterButtonProps = {
  base,
  sort,
};
