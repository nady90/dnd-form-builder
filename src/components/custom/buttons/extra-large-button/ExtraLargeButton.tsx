import React from "react";

import { Button } from "@/components/ui/button";

export interface IExtraLargeButton extends React.ComponentProps<"button"> {
  text: string;
}

const ExtraLargeButton: React.FC<IExtraLargeButton> = ({ text }) => {
  return (
    <Button className="cursor-pointer bg-blue-500 px-8 py-6 text-4xl hover:bg-blue-600">
      {text}
    </Button>
  );
};

export default ExtraLargeButton;
