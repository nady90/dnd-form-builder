import { EyeIcon } from "lucide-react";
import React from "react";
import { BsThreeDots } from "react-icons/bs";

import DateIcon from "@/components/icons/Date";
import { Skeleton } from "@/components/ui/skeleton";

import PrimaryButton from "../../buttons/primary-button/PrimaryButton";
import Tag from "../../tags/tag/Tag";

export interface IInfoCard {
  name: string;
  description: string;
  date: string;
  views: number;
  published: boolean;
  loading: boolean;
}

const InfoCard: React.FC<IInfoCard> = ({
  name,
  description,
  date,
  views,
  published,
  loading,
}) => {
  return (
    <>
      {!loading && (
        <div className="flex w-full grow flex-col gap-y-4 rounded-lg bg-gray-100 p-3 xl:min-w-[269px]">
          <div className="flex min-w-0 flex-col gap-y-1">
            <div className="flex flex-row justify-between">
              <Tag
                variant={published ? "primary" : "outline"}
                text={published ? "published" : "draft"}
              />
              <BsThreeDots className="cursor-pointer text-gray-800 hover:scale-x-105" />
            </div>
            <div className="flex min-w-0 flex-col gap-y-1">
              <p className="min-w-0 truncate text-xl font-medium text-gray-800 capitalize">
                {name}
              </p>
              <p className="text-xs font-light text-gray-500">
                {description ? description : "No Description"}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 text-xs font-light text-gray-500">
            <div className="flex flex-row items-center justify-start gap-x-2">
              <DateIcon className="text-gray-500" />
              <p>{date}</p>
            </div>
            <div className="flex flex-row items-center justify-start gap-x-2">
              <EyeIcon className="h-4 w-4 text-gray-500" />
              <p>{views} views</p>
            </div>
          </div>
          <PrimaryButton
            text={published ? "View submissions" : "Finish the form"}
          />
        </div>
      )}
      {loading && (
        <Skeleton className="h-full w-full min-w-[269px] rounded-lg bg-gray-100 p-3">
          <div className="opacity-0">
            <div className="flex min-w-0 flex-col gap-y-1">
              <div className="flex flex-row justify-between">
                <Tag
                  variant={published ? "primary" : "outline"}
                  text={published ? "published" : "draft"}
                />
                <BsThreeDots className="cursor-pointer text-gray-800 hover:scale-x-105" />
              </div>
              <div className="flex min-w-0 flex-col gap-y-1">
                <p className="min-w-0 truncate text-xl font-medium text-gray-800 capitalize">
                  {name}
                </p>
                <p className="text-xs font-light text-gray-500">
                  {description ? description : "No Description"}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-2 text-xs font-light text-gray-500">
              <div className="flex flex-row items-center justify-start gap-x-2">
                <DateIcon className="text-gray-500" />
                <p>{date}</p>
              </div>
              <div className="flex flex-row items-center justify-start gap-x-2">
                <EyeIcon className="h-4 w-4 text-gray-500" />
                <p>{views} views</p>
              </div>
            </div>
            <PrimaryButton
              text={published ? "View submissions" : "Finish the form"}
            />
          </div>
        </Skeleton>
      )}
    </>
  );
};

export default InfoCard;
