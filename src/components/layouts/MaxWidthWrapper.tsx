import React from "react";

export interface IMaxWidthWrapper {
  children: React.ReactNode;
}

const MaxWidthWrapper: React.FC<IMaxWidthWrapper> = ({ children }) => {
  return <div className="w-full max-w-[1121px]">{children}</div>;
};

export default MaxWidthWrapper;
