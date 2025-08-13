import React from "react";

import { Button } from "@/components/ui/button";

export interface IExtraLargeButton extends React.ComponentProps<"button"> {
  children: React.ReactNode;
}

const ExtraLargeButton: React.FC<IExtraLargeButton> = ({ children }) => {
  return (
    <Button className="cursor-pointer bg-blue-500 px-8 py-6 text-4xl hover:bg-blue-600">
      {children}
    </Button>
  );
};

export default ExtraLargeButton;
