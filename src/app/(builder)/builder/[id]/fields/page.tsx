import React from "react";

import { GetFormByIdAction } from "@/actions/form";

export default async function BuilderFieldsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const form = await GetFormByIdAction(Number(id));
  console.log("🚀 ~ BuilderFieldsPage ~ form:", form);

  return <div className="grow bg-gray-50">builder page</div>;
}
