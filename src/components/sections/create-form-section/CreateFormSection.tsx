"use client";
import React from "react";

import ActionCard from "@/components/custom/cards/action-card/ActionCard";
import Grid4to1 from "@/components/layouts/Grid4to1";
import MaxWidthWrapper from "@/components/layouts/MaxWidthWrapper";
import SectionHeading from "@/components/typography/SectionHeading";
import { CreateFormSchemaType } from "@/schemas/form";

export interface ICreateFormSection {
  title: string;
  submitHandler?: ((values: CreateFormSchemaType) => void) | null;
}

const CreateFormSection: React.FC<ICreateFormSection> = ({
  title,
  submitHandler,
}) => {
  submitHandler = submitHandler
    ? submitHandler
    : (values) => {
        console.log(values);
      };

  return (
    <div className="border-b border-gray-200 py-12">
      <MaxWidthWrapper className="mx-auto">
        <div className="flex flex-col gap-y-6">
          <SectionHeading>{title}</SectionHeading>
          <Grid4to1 className="place-items-center">
            <ActionCard
              text="Start From Scratch"
              subText="Jump right in and build something beautiful"
              variant="add"
              submitHandler={submitHandler}
            />
            <ActionCard
              text="Use Template"
              subText="Use a template to create and send a survey faster"
              variant="template"
              submitHandler={submitHandler}
            />
            <ActionCard
              text="Import Form"
              subText="Convert your existing forms instantly"
              variant="import"
              submitHandler={submitHandler}
            />
            <ActionCard
              text="Create with AI"
              subText="Save time and create forms faster. Let AI hand the first draft"
              variant="ai"
              submitHandler={submitHandler}
            />
          </Grid4to1>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default CreateFormSection;
