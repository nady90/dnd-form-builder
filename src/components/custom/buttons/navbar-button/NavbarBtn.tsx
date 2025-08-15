import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import DeleteIcon from "@/components/icons/DeleteIcon";
import PreviewIcon from "@/components/icons/PreviewIcon";
import SaveIcon from "@/components/icons/SaveIcon";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type INavbarBtn = {
  variety?: "save" | "preview" | "delete";
  loading: boolean;
} & React.ComponentProps<"button">;

const NavbarBtn: React.FC<INavbarBtn> = ({
  loading,
  children,
  className,
  variety,
  ...props
}) => {
  return (
    <Button
      className={cn(
        "inline-flex h-[25px] cursor-pointer items-center justify-center rounded-xs px-4 text-sm font-normal text-white",
        [variety === "save" && "bg-blue-500"],
        [variety === "save" && "text-xs"],
        [variety === "preview" && "bg-white"],
        [variety === "preview" && "text-blue-500"],
        [variety === "delete" && "bg-red-500"],
        // Hover states
        [variety === "save" && "hover:bg-blue-700"],
        [variety === "preview" && "hover:bg-gray-100"],
        [variety === "delete" && "hover:bg-red-700"],
        className,
      )}
      {...props}
    >
      {loading && (
        <div className="relative">
          <AiOutlineLoading3Quarters className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin" />
          <div className="invisible">
            {variety === "save" && <SaveIcon />}
            {variety === "preview" && <PreviewIcon />}
            {variety === "delete" && <DeleteIcon />}
            {children}
          </div>
        </div>
      )}
      {!loading && (
        <>
          {variety === "save" && <SaveIcon />}
          {variety === "preview" && <PreviewIcon />}
          {variety === "delete" && <DeleteIcon />}
          {children}
        </>
      )}
    </Button>
  );
};

export default NavbarBtn;
