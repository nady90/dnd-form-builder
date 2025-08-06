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
    <h3 className={cn("text-3xl font-bold text-gray-900", className)}>
      {children}
    </h3>
  );
}
