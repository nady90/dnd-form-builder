import React from "react";

import { cn } from "@/lib/utils";

export default function AlignCenterIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("group h-[12px] w-[20px]", className)}
      viewBox="0 0 20 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="group-hover:stroke-blue-500"
        d="M1 1H19M4 6H16M8 11H12"
        stroke="#1E2939"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
