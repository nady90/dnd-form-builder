import React from "react";

import Lens from "@/components/icons/Lens";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export interface ISearchBar {
  className?: string;
}

const SearchBar: React.FC<ISearchBar> = ({ className }) => {
  return (
    <div className={cn("relative w-full max-w-[239px]", className)}>
      <Input
        placeholder="Search Components"
        className="h-[36px] pr-10 pl-3 placeholder:text-gray-500"
      />
      <Lens className="text-muted-foreground absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 transform" />
    </div>
  );
};

export default SearchBar;
