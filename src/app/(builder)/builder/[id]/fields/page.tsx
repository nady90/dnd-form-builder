import React from "react";

import { GetFormByIdAction } from "@/actions/form";
import Builder from "@/components/custom/builder/Builder";
import { PrismaFormNotFound } from "@/errors/prisma-errors";

export default async function BuilderFieldsPage({
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
    <div className="grow">
      <Builder form={form} />
    </div>
  );
}
