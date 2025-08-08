import React from "react";

import { Button } from "@/components/ui/button";

export interface IDefaultButton {
  text: string;
  icon?: React.FC<{ className: string }>;
}

const DefaultButton: React.FC<IDefaultButton> = ({ text, icon }) => {
  const Icon = icon;

  return (
    <Button className="inline-flex cursor-pointer items-center justify-center rounded-xs bg-blue-500 px-3 py-2 text-base font-normal text-white transition-all duration-300 hover:bg-blue-600">
      {Icon && <Icon className="h-6 w-6" />}
      <span className="hidden sm:block">{text}</span>
    </Button>
  );
};

export default DefaultButton;
