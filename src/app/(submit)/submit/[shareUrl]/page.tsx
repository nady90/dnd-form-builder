import Link from "next/link";
import React from "react";

import { GetFormContentByShareUrlAction } from "@/actions/form";
import { FormElementInstance } from "@/components/custom/all-elements-folder/_CentralPlace";
import Logo from "@/components/icons/Logo";
import SubmitSection from "@/components/sections/submit-section/SubmitSection";
import { SubmitPageFormNotFound } from "@/errors/form-errors";

export default async function SubmitPage({
  params,
}: {
  params: Promise<{ shareUrl: string }>;
}) {
  const shareUrl = (await params).shareUrl;
  let form;
  try {
    form = await GetFormContentByShareUrlAction(shareUrl);
  } catch (error) {
    const err = error as Error;
    throw new SubmitPageFormNotFound(err.message);
  }

  const content = JSON.parse(form.content) as FormElementInstance[];

  console.log("🚀 ~ SubmitPage ~ form:", form);

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-50">
      <nav className="flex h-20 w-full items-center justify-center bg-white">
        <Link href={"/dashboard"}>
          <Logo className="h-[56px] w-[184px]" />
        </Link>
      </nav>

      <div className="flex w-full grow flex-col items-center justify-center">
        <SubmitSection
          name={form.name}
          description={form.description}
          content={content}
          id={form.id}
        />
      </div>
    </div>
  );
}
