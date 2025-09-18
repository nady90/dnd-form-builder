import React from "react";

import { cn } from "@/lib/utils";

export default function PublishIcon({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      className={cn("h-3 w-2.5", className)}
      {...props}
      width="9"
      height="9"
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.95817 8.83342V4.41883L2.54984 5.82716L1.7915 5.04175L4.49984 2.33341L7.20817 5.04175L6.44984 5.82716L5.0415 4.41883V8.83342H3.95817ZM0.166504 2.87508V1.25008C0.166504 0.952165 0.27267 0.69722 0.485004 0.485248C0.697337 0.273276 0.952282 0.167109 1.24984 0.166748H7.74984C8.04775 0.166748 8.30288 0.272915 8.51521 0.485248C8.72755 0.697581 8.83353 0.952526 8.83317 1.25008V2.87508H7.74984V1.25008H1.24984V2.87508H0.166504Z"
        fill="white"
      />
    </svg>
  );
}
