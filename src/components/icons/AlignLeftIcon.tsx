import React from "react";

import { cn } from "@/lib/utils";

export default function AlignLeftIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("group h-[12px] w-[20px]", className)}
      viewBox="0 0 20 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="group-hover:stroke-blue-500"
        d="M1 1H19"
        stroke="#1E2939"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="group-hover:stroke-blue-500"
        d="M1 6H13"
        stroke="#1E2939"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="group-hover:stroke-blue-500"
        d="M1 11H5"
        stroke="#1E2939"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
