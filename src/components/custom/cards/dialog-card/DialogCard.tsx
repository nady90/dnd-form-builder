import React from "react";

import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogPortal,
  DialogTitle,
} from "@/components/ui/dialog";

export interface IDialogCard {
  title: string;
  description: string;
  children: React.ReactNode;
}

const DialogCard: React.FC<IDialogCard> = ({
  title,
  description,
  children,
}) => {
  return (
    <DialogPortal>
      <DialogContent className="flex w-[464px] flex-col gap-y-6 rounded-lg px-6 pt-6 pb-4">
        <DialogHeader className="mx-auto flex max-w-[275px] flex-col gap-y-2 text-center">
          <DialogTitle className="text-center text-xl font-semibold text-gray-800">
            {title}
          </DialogTitle>
          <DialogDescription className="text-center text-sm font-normal text-gray-500">
            {description}
          </DialogDescription>
        </DialogHeader>
        <div>{children}</div>
      </DialogContent>
    </DialogPortal>
  );
};

export default DialogCard;
