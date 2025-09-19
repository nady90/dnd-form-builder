"use client";
import React, { useState, useTransition } from "react";
import { toast } from "sonner";

import { SubmitFormAction } from "@/actions/form";
import {
  FormElementInstance,
  FormElements,
} from "@/components/custom/all-elements-folder/_CentralPlace";
import PrimaryButton from "@/components/custom/buttons/primary-button/PrimaryButton";
import { FormSubmitError } from "@/errors/form-errors";

export default function SubmitSection({
  content,
  name,
  description,
  id,
}: {
  content: FormElementInstance[];
  name: string;
  description: string;
  id: number;
}) {
  const [isSubmitting, startTransition] = useTransition();
  type FormValues = { [key: string]: string };

  const [formValues, setFormValues] = useState<FormValues>({});
  console.log("🚀 ~ SubmitSection ~ formValues:", formValues);

  async function submitForm() {
    try {
      await SubmitFormAction(id, JSON.stringify(formValues));
      toast.success("Form Submitted Successfully!");
    } catch (err) {
      toast.error("Something went wrong!", {
        description: "Could NOT submit the form. Please try again later.",
      });
      const error = err as Error;
      throw new FormSubmitError(error.message);
    }
  }

  return (
    <div className="flex h-[819px] w-full max-w-[748px] flex-col gap-y-5 overflow-y-auto bg-white px-5 py-3 text-gray-800">
      <div className="border-b border-gray-300 pb-3">
        <h1 className="text-lg font-medium">{name}</h1>
        <p className="text-sm font-light">{description}</p>
      </div>
      {content.map((el) => {
        const Element = FormElements[el.type].submitComponent;
        return (
          <Element
            key={el.id}
            elementInstance={el}
            setFormValues={setFormValues}
          />
        );
      })}
      <PrimaryButton
        className="w-full rounded-none"
        disabled={isSubmitting}
        onClick={() => {
          startTransition(submitForm);
        }}
      >
        Submit
      </PrimaryButton>
    </div>
  );
}
