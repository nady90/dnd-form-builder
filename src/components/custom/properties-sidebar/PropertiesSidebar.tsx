import React from "react";
import { IoMdClose } from "react-icons/io";

export default function PropertiesSidebar() {
  return (
    <div className="flex w-full max-w-[279px] flex-col gap-x-5 bg-white px-5 py-[36px]">
      <div className="flow-row flex justify-between">
        <span className="text-base font-medium text-gray-800">
          Edit the fields
        </span>
        <IoMdClose />
      </div>
    </div>
  );
}
