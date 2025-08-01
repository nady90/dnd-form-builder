import React from "react";
import { MdKeyboardArrowDown, MdOutlineFilterList } from "react-icons/md";

export interface IFilterButton {
  text: string;
}

const FilterButton: React.FC<IFilterButton> = ({ text }) => {
  return (
    <div className="inline-flex h-[40px] w-[150px] items-center justify-between gap-x-3 rounded-xs border border-gray-200 px-3 py-2 text-gray-500">
      <div className="flex flex-row items-center gap-x-1 text-base font-normal text-gray-500 capitalize">
        <div className="flex flex-row items-center">
          <MdOutlineFilterList className="scale-125" />
        </div>
        <span>{text}</span>
      </div>
      <div>
        <MdKeyboardArrowDown className="scale-125" />
      </div>
    </div>
  );
};

export default FilterButton;
