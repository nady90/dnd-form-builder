import React, { ReactNode } from "react";

import BuilderBottomNavbar from "@/components/custom/navbars/builder-bottom-navbar/BuilderBottomNavbar";
import BuilderTopNavbar from "@/components/custom/navbars/builder-top-navbar/BuilderTopNavbar";

export default function BuilderLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen flex-col">
      <div>
        <BuilderTopNavbar
          title={"Form Builder"}
          description={"Add and customize forms for your needs"}
          savedAt={new Date()}
        />
        <BuilderBottomNavbar
          link={
            "https://formcore.com/share/job/front-end/121FFb2d1CCR/new/long"
          }
        />
      </div>
      {children}
    </div>
  );
}
