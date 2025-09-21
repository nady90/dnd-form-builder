import Link from "next/link";
import React from "react";

import { GetFormByIdAction, GetFormSubmissions } from "@/actions/form";
import PrimaryButton from "@/components/custom/buttons/primary-button/PrimaryButton";
import ShareableLink from "@/components/custom/shareable-link/ShareableLink";
import MaxWidthWrapper from "@/components/layouts/MaxWidthWrapper";
import StatsSection from "@/components/sections/stats-section/StatsSection";
import SubmissionsTable from "@/components/sections/submissions-table/SubmissionsTable";
import { Separator } from "@/components/ui/separator";
import { PrismaFormNotFound } from "@/errors/prisma-errors";

export default async function FormPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const form = await GetFormByIdAction(Number(id));

  if (!form) {
    throw new PrismaFormNotFound();
  }
  let submissionRate = 0;
  if (form.visits > 0) {
    submissionRate = (form.submissions / form.visits) * 100;
  }

  const bounceRate = 100 - submissionRate;

  const formSubmissionsRes = await GetFormSubmissions(form.id);
  const formSubmissions = formSubmissionsRes?.FormSubmissions.map(
    (submission) => {
      return { ...submission, content: JSON.parse(submission.content) };
    },
  );
  console.log("🚀 ~ FormPage ~ formSubmissions:", formSubmissions);

  const formElements = JSON.parse(form.content);
  console.log("🚀 ~ FormPage ~ formElements:", formElements);

  return (
    <MaxWidthWrapper className="mx-auto">
      <div className="flex flex-col gap-y-7 py-14 text-gray-800">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-3xl font-bold">{form.name}</h1>
          <Link href={`/submit/${form.shareURL}`} target="_blank">
            <PrimaryButton className="w-[191px] cursor-alias">
              Visit
            </PrimaryButton>
          </Link>
        </div>
        <Separator />
        <div className="flex flex-row items-center justify-between gap-x-3">
          <ShareableLink shareURL={form.shareURL} />
        </div>
        <Separator />
        <StatsSection
          visits={form.visits}
          submissions={form.submissions}
          submissionRate={submissionRate}
          bounceRate={bounceRate}
          loading={false}
        />
        <SubmissionsTable
          formElements={formElements}
          formSubmissions={formSubmissions}
        />
      </div>
    </MaxWidthWrapper>
  );
}
