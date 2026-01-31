import Image from "next/image";
import React from "react";

import AskAIIcon from "@/components/icons/AskAIIcon";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import AiButtonBg from "../../../../../public/images/AI-button-bg.png";

export default function AiButton({ className }: { className?: string }) {
  return (
    <Button
      className={cn(
        "relative w-fit cursor-pointer gap-x-1.5 overflow-hidden rounded-full border-none bg-transparent px-4 py-2 shadow-none outline-0 hover:scale-105 hover:shadow-none hover:outline-none focus-visible:border-0 focus-visible:border-transparent focus-visible:ring-0 active:scale-100",
        className,
      )}
    >
      <Image
        className="absolute z-10 h-[200%] w-[300%]"
        src={AiButtonBg}
        alt=""
      />
      <div className="z-20">
        <AskAIIcon />
      </div>
      <span className="z-30">Ask AI</span>
    </Button>
  );
}
