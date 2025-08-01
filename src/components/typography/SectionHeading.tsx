import React, { ReactNode } from "react";

export default function SectionHeading({ children }: { children: ReactNode }) {
  return <h3 className="text-3xl font-bold text-gray-900">{children}</h3>;
}
