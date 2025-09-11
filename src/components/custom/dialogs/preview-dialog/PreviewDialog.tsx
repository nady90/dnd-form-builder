import { DialogClose } from "@radix-ui/react-dialog";
import React from "react";
import { IoMdClose } from "react-icons/io";

import BackArrow from "@/components/icons/BackArrow";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useFormContext from "@/hooks/useFormContext";
import { cn } from "@/lib/utils";

import { FormElements } from "../../all-elements-folder/_CentralPlace";
import PrimaryButton from "../../buttons/primary-button/PrimaryButton";

const PreviewDialog = () => {
  const { elements } = useFormContext();

  return (
    <DialogContent
      className={cn(
        "flex h-screen w-screen flex-col rounded-none bg-gray-50 p-0 sm:max-w-screen",
        "[&>button:last-child]:hidden",
      )}
    >
      <DialogHeader className="flex h-[72px] flex-row items-center justify-between bg-white px-10 py-10">
        <div className="flex flex-row items-center gap-x-4">
          <DialogClose>
            <IoMdClose className="h-[24px] w-[24px] cursor-pointer text-gray-800 transition-all duration-500 hover:scale-125" />
          </DialogClose>
          <div className="h-[46px] w-[1px] bg-gray-200"></div>
          <div className="flex flex-col gap-y-1.5 text-gray-800">
            <DialogTitle className="text-2xl font-medium">
              Form Preview
            </DialogTitle>
            <DialogDescription className="text-sm font-light">
              This is how your form will look to your users
            </DialogDescription>
          </div>
        </div>
        <DialogClose asChild>
          <PrimaryButton className="max-w-max">
            <BackArrow />
            <span>Back to Builder</span>
          </PrimaryButton>
        </DialogClose>
      </DialogHeader>
      <div className="flex grow flex-col items-center justify-center overflow-hidden">
        <div className="flex h-10/12 w-6/12 flex-col gap-y-3 overflow-y-auto bg-white px-4 py-3">
          <div className="gap-y-1 border-b border-gray-200 pb-3 text-gray-800">
            <h3 className="text-lg font-medium">Employment form</h3>
            <p className="text-sm font-light">This is to apply for a job</p>
          </div>
          {elements.map((el) => {
            const PreviewComponent = FormElements[el.type].previewComponent;
            return (
              <div key={el.id}>
                <PreviewComponent elementInstance={el} />
              </div>
            );
          })}
          <PrimaryButton className="rounded-none">Submit</PrimaryButton>
        </div>
      </div>
    </DialogContent>
  );
};

export default PreviewDialog;
