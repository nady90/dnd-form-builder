import React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface IGhostButton {
  text: string;
  className?: string;
  disabled?: boolean;
  icon?: React.FC<{ className: string }>;
}

const GhostButton: React.FC<IGhostButton> = ({
  text,
  className,
  disabled,
  icon,
}) => {
  const Icon = icon;

  return (
    <Button
      disabled={disabled}
      className={cn("text-lg font-medium text-blue-500", className)}
      variant={"ghost"}
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
};

export default GhostButton;
