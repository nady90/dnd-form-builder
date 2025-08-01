import React, { ReactNode } from "react";

export default function Grid4to1({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 place-items-center gap-y-4 sm:grid-cols-[repeat(2,auto)] sm:justify-between sm:gap-x-4 md:grid-cols-[repeat(3,auto)] lg:grid-cols-[repeat(4,auto)]">
      {children}
    </div>
  );
}
