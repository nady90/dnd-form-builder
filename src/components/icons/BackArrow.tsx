import React from "react";
import { IoArrowBackSharp } from "react-icons/io5";

import { cn } from "@/lib/utils";

export default function BackArrow({ className }: { className?: string }) {
  return (
    <IoArrowBackSharp
      aria-hidden={true}
      className={cn("inline-flex items-center justify-center", className)}
    />
  );
}
