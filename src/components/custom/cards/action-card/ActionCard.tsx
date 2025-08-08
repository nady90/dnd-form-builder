import React from "react";

import AddIcon from "@/components/icons/Add";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export interface IActionCard {
  text: string;
  subText: string;
  variant: "add" | "template" | "import" | "ai";
}

const ActionCard: React.FC<IActionCard> = ({ text, subText, variant }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group flex min-w-[200px] cursor-pointer flex-col items-center gap-y-3 text-center">
          <div className="flex h-[134px] w-[127px] items-center justify-center border border-gray-100 transition-all duration-300 group-hover:bg-blue-500">
            {variant === "add" && (
              <AddIcon className="h-[45px] w-[46px] transition-all duration-300 group-hover:h-[54px] group-hover:w-[54px]" />
            )}
          </div>
          <div className="flex max-w-[197px] flex-col">
            <p className="text-base font-semibold text-gray-800">{text}</p>
            <p className="text-sm font-light text-gray-500">{subText}</p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ActionCard;
