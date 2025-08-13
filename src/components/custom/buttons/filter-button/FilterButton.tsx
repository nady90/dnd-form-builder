import React from "react";
import {
  MdKeyboardArrowDown,
  MdOutlineFilterList,
  MdOutlineSortByAlpha,
} from "react-icons/md";

export interface IFilterButton {
  children: React.ReactNode;
  variant: "filter" | "sort";
}

const FilterButton: React.FC<IFilterButton> = ({ children, variant }) => {
  return (
    <>
      <div className="hidden md:block">
        <FilterButtonLarge variant={variant}>{children}</FilterButtonLarge>
      </div>
      <div className="block md:hidden">
        <FilterButtonMobile variant={variant} />
      </div>
    </>
  );
};

function FilterButtonLarge({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant: "filter" | "sort";
}) {
  return (
    <div className="inline-flex h-[40px] w-[150px] cursor-pointer items-center justify-between gap-x-3 rounded-xs border border-gray-200 px-3 py-2 text-gray-500 hover:border-gray-500">
      <div className="flex flex-row items-center gap-x-1 text-base font-normal text-gray-500 capitalize">
        <div className="flex flex-row items-center">
          {variant === "filter" ? (
            <MdOutlineFilterList className="scale-125" />
          ) : (
            <MdOutlineSortByAlpha className="scale-125" />
          )}
        </div>
        <span>{children}</span>
      </div>
      <div>
        <MdKeyboardArrowDown className="scale-125" />
      </div>
    </div>
  );
}

function FilterButtonMobile({ variant }: { variant: "filter" | "sort" }) {
  return (
    <div className="">
      {variant === "filter" ? (
        <MdOutlineFilterList className="h-6 w-6 cursor-pointer text-gray-500 hover:text-gray-600" />
      ) : (
        <MdOutlineSortByAlpha className="h-6 w-6 cursor-pointer text-gray-500 hover:text-gray-600" />
      )}
    </div>
  );
}

export default FilterButton;
