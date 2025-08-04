import React, { ReactNode } from "react";

import { cn } from "@/lib/utils";

export default function Grid4to1({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-y-4 sm:grid-cols-[repeat(2,auto)] sm:gap-x-4 sm:gap-y-4 md:grid-cols-[repeat(3,auto)] lg:grid-cols-[repeat(4,auto)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
