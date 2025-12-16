import { formatDistance } from "date-fns";
import React from "react";

import { FormElementInstance } from "@/components/custom/all-elements-folder/_CentralPlace";

import { FormSubmissions } from "../../../../node_modules/generated/prisma";

type SubmissionsTableProps = {
  formElements: FormElementInstance[];
  formSubmissions: FormSubmissions[] | undefined;
};

export default function SubmissionsTable({
  formElements,
  formSubmissions,
}: SubmissionsTableProps) {
  if (!formSubmissions) {
    return <div>There are no submissions</div>;
  }

  return (
    <div className="flex flex-col gap-y-2.5">
      <h2 className="text-3xl font-bold">Submissions</h2>
      <div className="flex flex-col gap-y-2.5">
        {formSubmissions.map((submission) => {
          return (
            <SubmissionWrapper
              key={submission.id}
              submission={submission}
              formElements={formElements}
            />
          );
        })}
      </div>
    </div>
  );
}

function SubmissionWrapper({
  submission: { createdAt, content },
  formElements,
}: {
  submission: FormSubmissions;
  formElements: FormElementInstance[];
}) {
  console.log("🚀 ~ SubmissionWrapper ~ content:", content);

  return (
    <div className="flex flex-row justify-between rounded-md border border-gray-300 p-3.5 text-sm">
      <div className="flex w-[42.5%] flex-col gap-y-2">
        <p className="text-lg font-semibold text-gray-800">Question</p>
        <div className="flex flex-col gap-y-2">
          {Object.keys(content).map((qu, idx) => {
            return (
              <div key={idx}>
                {
                  formElements.find((el) => Number(el.id) === Number(qu))
                    ?.attributes.label
                }
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex w-[42.5%] flex-col gap-y-2">
        <p className="text-lg font-semibold text-gray-800">Answer</p>
        <div className="flex flex-col gap-y-2">
          {Object.values(content).map((ans, idx) => {
            return <div key={idx}>{ans}</div>;
          })}
        </div>
      </div>

      <div className="flex w-[15%] flex-col">
        <p className="text-lg font-semibold text-gray-800">Submitted At</p>
        <p className="font-extralight">
          {formatDistance(createdAt, Date.now(), {
            addSuffix: true,
          })}
        </p>
      </div>
    </div>
  );
}
