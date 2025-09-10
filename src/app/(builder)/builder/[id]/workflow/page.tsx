import React from "react";

import { GetFormByIdAction } from "@/actions/form";
import { PrismaFormNotFound } from "@/errors/prisma-errors";

export default async function WorkflowPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const form = await GetFormByIdAction(Number(id));
  if (!form) {
    throw new PrismaFormNotFound();
  }

  return (
    <div className="">
      <h1 className="text-6xl">Workflow</h1>
    </div>
  );
}
