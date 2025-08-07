import React, { ReactNode } from "react";

import { cn } from "@/lib/utils";

export default function SectionHeading({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={cn("text-lg font-bold text-gray-900 md:text-3xl", className)}
    >
      {children}
    </h3>
  );
}
