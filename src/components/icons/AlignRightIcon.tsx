import React from "react";

import { cn } from "@/lib/utils";

export default function AlignRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("group h-[12px] w-[20px]", className)}
      viewBox="0 0 20 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="group-hover:stroke-blue-500"
        d="M19 1H1"
        stroke="#1E2939"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        className="group-hover:stroke-blue-500"
        d="M19 6H7"
        stroke="#1E2939"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        className="group-hover:stroke-blue-500"
        d="M19 11H15"
        stroke="#1E2939"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
