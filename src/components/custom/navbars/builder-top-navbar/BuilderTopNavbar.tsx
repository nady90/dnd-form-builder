"use client";
import { formatDistance } from "date-fns";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useTransition } from "react";
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
            <p
              className="truncate text-lg font-bold text-gray-800"
              onClick={() => {
                setIsEditingTitle(true);
              }}
            >
              {localTitle ? localTitle : "No title"}
            </p>
          )}
          {isEditingTitle && (
            <div className="relative h-[28px] w-10/12">
              <Input
                aria-label="change title"
                className={cn(
                  "full h-[28px] rounded-none text-lg font-bold text-gray-800",
                  // To override shadcn defaults
                  "focus-visible:ring-none focus-visible:border focus-visible:border-blue-500 focus-visible:ring-[0px]",
                )}
                ref={(element) => {
                  element?.focus();
                }}
                onChange={(e) => {
                  setLocalTitle(e.target.value);
                }}
                onBlur={() => {
                  setIsEditingTitle(false);
                }}
                placeholder={localTitle}
                onKeyUp={(e) => {
                  if (e.key === "Enter") {
                    setIsEditingTitle(false);
                  }
                }}
              />
              <InputDecorations type="title" />
            </div>
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
            <p
              className="w-10/12 truncate text-xs font-light text-gray-800"
              onClick={() => {
                setIsEditingDescription(true);
              }}
            >
              {localDescription ? localDescription : "No description"}
            </p>
          )}
          {isEditingDescription && (
            <div className="relative h-[16px] w-10/12 py-3">
              <Input
                aria-label="change description"
                className={cn(
                  "relative top-1/2 left-1/2 h-[16px] w-full -translate-x-1/2 -translate-y-1/2 rounded-none py-3 text-xs font-light text-gray-800",
                  // To override shadcn defaults
                  "focus-visible:ring-none focus-visible:border focus-visible:border-blue-500 focus-visible:ring-[0px]",
                )}
                ref={(element) => {
                  element?.focus();
                }}
                onChange={(e) => {
                  setLocalDescription(e.target.value);
                }}
                onBlur={() => {
                  setIsEditingDescription(false);
                }}
                onKeyUp={(e) => {
                  if (e.key === "Enter") {
                    setIsEditingDescription(false);
                  }
                }}
                placeholder={localDescription}
              />
              <InputDecorations type="description" />
            </div>
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
      <FieldsTab formId={formId} />
      <WorkflowTab formId={formId} />
      <PermissionsTab formId={formId} />
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

function InputDecorations({ type }: { type: "title" | "description" }) {
  if (type === "title") {
    return (
      <>
        <div className="absolute top-[-2.0px] left-[-2.0px] h-[5px] w-[5px] border border-blue-500 bg-white"></div>
        <div className="absolute top-[-2.0px] right-[-2.0px] h-[5px] w-[5px] border border-blue-500 bg-white"></div>
        <div className="absolute right-[-2.0px] bottom-[-2.0px] h-[5px] w-[5px] border border-blue-500 bg-white"></div>
        <div className="absolute bottom-[-2.0px] left-[-2.0px] h-[5px] w-[5px] border border-blue-500 bg-white"></div>
      </>
    );
  } else {
    return (
      <>
        <div className="absolute top-[-1px] left-[-1px] h-[5px] w-[5px] border border-blue-500 bg-white"></div>
        <div className="absolute top-[-1px] right-[-1px] h-[5px] w-[5px] border border-blue-500 bg-white"></div>
        <div className="absolute right-[-1px] bottom-[-1px] h-[5px] w-[5px] border border-blue-500 bg-white"></div>
        <div className="absolute bottom-[-1px] left-[-1px] h-[5px] w-[5px] border border-blue-500 bg-white"></div>
      </>
    );
  }
}

function FieldsTab({ formId }: { formId: number }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function changeRoute() {
    startTransition(() => {
      router.push(
        `${process.env.NEXT_PUBLIC_BASE_URL}/builder/${formId}/fields`,
      );
    });
  }

  return (
    <div
      onClick={changeRoute}
      className={cn(
        "inline-flex grow cursor-pointer items-center justify-center rounded-sm bg-transparent px-3 py-1 text-gray-800",
        [pathname.includes("fields") && "bg-white"],
        isPending && "cursor-wait",
      )}
    >
      Fields
    </div>
  );
}

function WorkflowTab({ formId }: { formId: number }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function changeRoute() {
    startTransition(() => {
      router.push(
        `${process.env.NEXT_PUBLIC_BASE_URL}/builder/${formId}/workflow`,
      );
    });
  }
  return (
    <div
      onClick={changeRoute}
      className={cn(
        "inline-flex grow cursor-pointer items-center justify-center rounded-sm bg-transparent px-3 py-1",
        [pathname.includes("workflow") && "bg-white"],
        isPending && "cursor-wait",
      )}
    >
      Workflow
    </div>
  );
}

function PermissionsTab({ formId }: { formId: number }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function changeRoute() {
    startTransition(() => {
      router.push(
        `${process.env.NEXT_PUBLIC_BASE_URL}/builder/${formId}/permissions`,
      );
    });
  }
  return (
    <div
      onClick={changeRoute}
      className={cn(
        "inline-flex grow cursor-pointer items-center justify-center rounded-sm bg-transparent px-3 py-1",
        [pathname.includes("permissions") && "bg-white"],
        isPending && "cursor-wait",
      )}
    >
      Permissions
    </div>
  );
}
export default BuilderTopNavbar;
