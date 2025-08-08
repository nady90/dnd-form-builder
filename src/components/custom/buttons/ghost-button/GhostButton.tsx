import React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface IGhostButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  className?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

const GhostButton = React.forwardRef<HTMLButtonElement, IGhostButton>(
  ({ text, className, disabled, icon, type, ...props }, ref) => {
    const Icon = icon;

    return (
      <Button
        ref={ref}
        type={type}
        disabled={disabled}
        className={cn("text-lg font-medium text-blue-500", className)}
        variant={"ghost"}
        {...props}
      >
        {Icon && (
          <Icon
            aria-hidden={true}
            className="inline-flex translate-y-[1px] scale-x-110 items-center justify-center"
          />
        )}
        <span>{text}</span>
      </Button>
    );
  },
);

GhostButton.displayName = "GhostButton";

export default GhostButton;
