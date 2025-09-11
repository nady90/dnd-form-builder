import React from "react";

import { cn } from "@/lib/utils";

export default function LargeSizeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-[10px] w-[6px]", className)}
      width="6"
      height="10"
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="group-hover:fill-blue-500"
        d="M0 0V10H6V8H2V0H0Z"
        fill="#1E2939"
      />
    </svg>
  );
}
