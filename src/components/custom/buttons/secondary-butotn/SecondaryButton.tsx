import React from "react";

import { Button } from "@/components/ui/button";

export interface ISecondaryButton {
  text: string;
  icon?: React.FC<{ className: string }>;
}

const SecondaryButton: React.FC<ISecondaryButton> = ({ text, icon }) => {
  const Icon = icon;

  return (
    <Button className="inline-flex cursor-pointer items-center justify-center rounded-xs bg-gray-100 px-3 py-2 text-base font-normal text-gray-500 transition-all duration-300 hover:bg-gray-200">
      {Icon && <Icon className="h-5 w-5" />}
      <span className="hidden sm:block">{text}</span>
    </Button>
  );
};

export default SecondaryButton;
