import React from "react";

import { cn } from "@/lib/utils";

export default function PreviewIcon({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      className={cn("h-[11px] w-4", className)}
      {...props}
      viewBox="0 0 16 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.00016 9.5C11.6822 9.5 14.6668 5.5 14.6668 5.5C14.6668 5.5 11.6822 1.5 8.00016 1.5C4.31816 1.5 1.3335 5.5 1.3335 5.5C1.3335 5.5 4.31816 9.5 8.00016 9.5Z"
        stroke="#2B7FFF"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M8.00016 7.16659C8.44219 7.16659 8.86611 6.99099 9.17867 6.67843C9.49123 6.36587 9.66683 5.94195 9.66683 5.49992C9.66683 5.05789 9.49123 4.63397 9.17867 4.32141C8.86611 4.00885 8.44219 3.83325 8.00016 3.83325C7.55814 3.83325 7.13421 4.00885 6.82165 4.32141C6.50909 4.63397 6.3335 5.05789 6.3335 5.49992C6.3335 5.94195 6.50909 6.36587 6.82165 6.67843C7.13421 6.99099 7.55814 7.16659 8.00016 7.16659Z"
        stroke="#2B7FFF"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
