"use client";
import React from "react";

import { CreateFormAction } from "@/actions/form";
import { CreateFormSchemaType } from "@/schemas/form";

import CreateFormSection from "./CreateFormSection";

export default function CreatFormSectionFetcher() {
  return (
    <CreateFormSection
      title={"Create Form"}
      submitHandler={async (values: CreateFormSchemaType) => {
        const id = await CreateFormAction(values);
        console.log("🚀 ~ CreatFormSectionFetcher ~ id:", id);
      }}
    />
  );
}
