import React, { ReactNode } from "react";

export default function SubmitLayout({ children }: { children: ReactNode }) {
  return <div className="h-screen w-screen">{children}</div>;
}
