import React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface IPrimaryButton {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
}

const PrimaryButton: React.FC<IPrimaryButton> = ({
  children,
  className,
  type,
  disabled = false,
  ...props
}) => {
  return (
    <Button
      {...props}
      type={type}
      disabled={disabled}
      className={cn(
        "inline-flex cursor-pointer items-center justify-center rounded-lg bg-blue-500 px-2.5 py-2 text-lg font-medium text-white transition-all duration-500 hover:bg-blue-600",
        className,
      )}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
