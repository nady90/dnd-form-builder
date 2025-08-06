import React from "react";

import { cn } from "@/lib/utils";

export interface IMaxWidthWrapper {
  children: React.ReactNode;
  className?: string;
}

const MaxWidthWrapper: React.FC<IMaxWidthWrapper> = ({
  children,
  className,
}) => {
  return (
    <div className={cn("w-full max-w-[1121px]", className)}>{children}</div>
  );
};

export default MaxWidthWrapper;
