import React from "react";

export interface ITag {
  text: string;
  variant: "primary" | "outline";
}

const Tag: React.FC<ITag> = ({ text, variant }) => {
  if (variant === "primary") {
    return (
      <div className="rounded-lg bg-gray-800 px-1.5 py-1 text-xs text-white capitalize">
        {text}
      </div>
    );
  } else if (variant === "outline") {
    return (
      <div className="inline-flex items-center justify-center rounded-lg bg-transparent px-1.5 py-1 text-center text-xs text-gray-800 capitalize outline outline-gray-800">
        {text}
      </div>
    );
  }
};

export default Tag;
