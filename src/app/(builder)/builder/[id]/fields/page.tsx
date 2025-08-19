import React from "react";

import { GetFormByIdAction } from "@/actions/form";

export default async function BuilderFieldsPage({
  params,
}: {
  params: { id: string };
}) {
  const form = await GetFormByIdAction(Number(params.id));
  console.log("🚀 ~ BuilderFieldsPage ~ form:", form);

  return <div className="grow bg-gray-50">builder page</div>;
}
