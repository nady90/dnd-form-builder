import React from "react";

import { Button } from "@/components/ui/button";

export interface IPrimaryButton {
  text: string;
}

const PrimaryButton: React.FC<IPrimaryButton> = ({ text }) => {
  return (
    <Button className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-blue-500 px-2.5 py-2 text-lg font-medium text-white transition-all duration-500 hover:bg-blue-600">
      {text}
    </Button>
  );
};

export default PrimaryButton;
