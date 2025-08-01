import React from "react";

import SectionHeading from "@/components/typography/SectionHeading";

import FilterButton from "../../buttons/filter-button/FilterButton";

export interface IFormsFilterBar {
  title: string;
}

const FormsFilterBar: React.FC<IFormsFilterBar> = ({ title }) => {
  return (
    <div className="flex w-full flex-row justify-between">
      <div className="capitalize">
        <SectionHeading>{title}</SectionHeading>
      </div>
      <div className="flex flex-row gap-x-3">
        <FilterButton text="filter by" />
        <FilterButton text="sort by" />
      </div>
    </div>
  );
};

export default FormsFilterBar;
