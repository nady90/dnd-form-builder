"use client";
import { formatDistance } from "date-fns";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MdRemoveRedEye } from "react-icons/md";

import EditIcon from "@/components/icons/EditIcon";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export interface IBuilderTopNavbar {
  title: string;
  description: string;
  savedAt: Date;
  formId: number;
}

const BuilderTopNavbar: React.FC<IBuilderTopNavbar> = ({
  title,
  description,
  savedAt,
  formId,
}) => {
  return (
    <div className="flex h-[88px] flex-row items-center justify-between border-b border-gray-100 px-5 py-4">
      <LeftDiv title={title} description={description} />

      <CenterDiv formId={formId} />

      <RightDiv savedAt={savedAt} />
    </div>
  );
};

function LeftDiv({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const [isEditingTitle, setIsEditingTitle] = useState<boolean>(false);
  const [isEditingDescription, setIsEditingDescription] =
    useState<boolean>(false);
  const [localTitle, setLocalTitle] = useState(title);
  const [localDescription, setLocalDescription] = useState(description);

  return (
    <div className="flex flex-row items-center gap-x-4">
      <IoMdClose className="h-[14px] w-[14px] cursor-pointer text-gray-800 transition-all duration-500 hover:scale-125" />
      <div className="h-[46px] w-[1px] bg-gray-200"></div>
      <div className="flex w-[233px] flex-col gap-y-1">
        <div className="flex flex-row items-start justify-between">
          {!isEditingTitle && (
            <p className="truncate text-lg font-bold text-gray-800">
              {localTitle ? localTitle : "No title"}
            </p>
          )}
          {isEditingTitle && (
            <Input
              aria-label="change title"
              className="h-[28px] w-10/12 rounded-none border-none outline-none selection:border-none selection:ring-0 selection:outline-none focus:border-none focus:shadow-none focus:ring-0 focus:outline-none"
              ref={(element) => {
                element?.focus();
              }}
              onBlur={(e) => {
                setLocalTitle(e.target.value);
                setIsEditingTitle(false);
              }}
              placeholder={localTitle}
            />
          )}
          <EditIcon
            role="button"
            aria-label="edit title"
            onClick={() => {
              setIsEditingTitle(true);
            }}
          />
        </div>

        <div className="flex flex-row items-start justify-between">
          {!isEditingDescription && (
            <p className="w-10/12 text-xs font-light text-gray-800">
              {localDescription ? localDescription : "No description"}
            </p>
          )}
          {isEditingDescription && (
            <Input
              aria-label="change description"
              className="h-[32px] w-10/12 rounded-none border-none outline-none selection:border-none selection:ring-0 selection:outline-none focus:border-none focus:shadow-none focus:ring-0 focus:outline-none"
              ref={(element) => {
                element?.focus();
              }}
              onBlur={(e) => {
                setLocalDescription(e.target.value);
                setIsEditingDescription(false);
              }}
              placeholder={localDescription}
            />
          )}
          <EditIcon
            role="button"
            aria-label="edit description"
            onClick={() => {
              setIsEditingDescription(true);
            }}
          />
        </div>
      </div>
    </div>
  );
}

function CenterDiv({ formId }: { formId: number }) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="inline-flex w-[271px] flex-row items-center justify-center rounded-md bg-gray-100 p-1 text-xs font-medium text-gray-800">
      <div
        onClick={() => {
          router.push(
            `${process.env.NEXT_PUBLIC_BASE_URL}/builder/${formId}/fields`,
          );
        }}
        className={cn(
          "inline-flex grow cursor-pointer items-center justify-center rounded-sm bg-transparent px-3 py-1",
          [pathname.includes("fields") && "bg-white"],
        )}
      >
        Fields
      </div>
      <div
        onClick={() => {
          router.push(
            `${process.env.NEXT_PUBLIC_BASE_URL}/builder/${formId}/workflow`,
          );
        }}
        className={cn(
          "inline-flex grow cursor-pointer items-center justify-center rounded-sm bg-transparent px-3 py-1",
          [pathname.includes("workflow") && "bg-white"],
        )}
      >
        Workflow
      </div>
      <div
        onClick={() => {
          router.push(
            `${process.env.NEXT_PUBLIC_BASE_URL}/builder/${formId}/permissions`,
          );
        }}
        className={cn(
          "inline-flex grow cursor-pointer items-center justify-center rounded-sm bg-transparent px-3 py-1",
          [pathname.includes("permissions") && "bg-white"],
        )}
      >
        Permissions
      </div>
    </div>
  );
}

function RightDiv({ savedAt }: { savedAt: Date }) {
  return (
    <div className="inline-flex flex-row items-center gap-x-2.5">
      <p className="text-xs font-light text-gray-500">
        Changes saved{" "}
        {formatDistance(savedAt, Date(), {
          // addSuffix: true,
        })}
      </p>
      <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50">
        <MdRemoveRedEye className="text-blue-500" />
      </div>
    </div>
  );
}

export default BuilderTopNavbar;
