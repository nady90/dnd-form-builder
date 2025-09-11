import React from "react";

import { cn } from "@/lib/utils";

export default function SmallSizeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-[10px] w-[6px]", className)}
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="group-hover:fill-blue-500"
        d="M2 0C0.9 0 0 0.9 0 2V4C0 4.53043 0.210714 5.03914 0.585787 5.41421C0.96086 5.78929 1.46957 6 2 6H4V8H0V10H4C5.11 10 6 9.11 6 8V6C6 5.46957 5.78929 4.96086 5.41421 4.58579C5.03914 4.21071 4.53043 4 4 4H2V2H6V0H2Z"
        fill="#1E2939"
      />
    </svg>
  );
}
