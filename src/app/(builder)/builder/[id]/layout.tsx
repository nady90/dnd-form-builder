import React, { ReactNode } from "react";

import { GetFormByIdAction } from "@/actions/form";
import BuilderBottomNavbar from "@/components/custom/navbars/builder-bottom-navbar/BuilderBottomNavbar";
import BuilderTopNavbar from "@/components/custom/navbars/builder-top-navbar/BuilderTopNavbar";
import { PrismaFormNotFound } from "@/errors/prisma-errors";

export default async function BuilderLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const form = await GetFormByIdAction(Number(id));

  if (!form) {
    throw new PrismaFormNotFound();
  }

  return (
    <div className="flex h-screen flex-col">
      <div>
        <BuilderTopNavbar
          formId={form.id}
          title={form?.name || "Form Builder"}
          description={
            form?.description || "Add and customize forms for your needs"
          }
          savedAt={form?.createdAt || new Date()}
        />
        <BuilderBottomNavbar
          link={
            "https://formcore.com/share/job/front-end/121FFb2d1CCR/new/long"
          }
          formId={form.id}
        />
      </div>

      {children}
    </div>
  );
}
