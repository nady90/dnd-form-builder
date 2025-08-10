import React from "react";

import { GetAllFormsAction } from "@/actions/form";

import AllFormsSection from "./AllFormsSection";

export default async function AllFormsFetcher() {
  // 1. Fetch the data
  // 2. Use the presentation component
  const data = await GetAllFormsAction();

  return <AllFormsSection data={data} loading={false} error={false} />;
}
