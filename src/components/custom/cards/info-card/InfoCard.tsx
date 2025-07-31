import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { IoPersonCircleSharp } from "react-icons/io5";
import { MdInfoOutline } from "react-icons/md";

import Dots from "@/components/icons/Dots";
import { Separator } from "@/components/ui/separator";

export interface IInfoCard {
  responses: string;
  category: string;
  name: string;
}

const InfoCard: React.FC<IInfoCard> = ({ responses, category, name }) => {
  return (
    <div className="flex w-[191px] max-w-full flex-col">
      <div className="relative mb-[2px] h-[119px] rounded-t-lg rounded-b-xs bg-linear-to-br from-blue-50 to-blue-500">
        <div className="absolute right-[11px] bottom-0 h-[86px] w-[112px] rounded-t-lg bg-white px-3 py-2">
          <div className="flex flex-col items-center gap-y-[9.33px] text-center">
            <span className="text-xs font-light text-gray-600">{category}</span>
            <Dots />
            <Dots />
            <Dots />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between px-1">
        <span className="text-sm font-medium text-gray-800">{responses}</span>
        <span>
          <BiDotsHorizontalRounded className="fill-gray-800" />
        </span>
      </div>
      <Separator className="my-1 bg-gray-200" />
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-between gap-x-1 py-1 text-gray-500">
          <span>
            <IoPersonCircleSharp />
          </span>
          <span className="text-sm font-normal">{name}</span>
        </div>
        <span>
          <MdInfoOutline />
        </span>
      </div>
    </div>
  );
};

export default InfoCard;
