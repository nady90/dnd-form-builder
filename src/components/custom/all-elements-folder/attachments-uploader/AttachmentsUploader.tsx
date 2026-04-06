"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect } from "react";
import {
  ControllerFieldState,
  ControllerRenderProps,
  useForm,
} from "react-hook-form";
import { FaStarOfLife } from "react-icons/fa";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import useFormContext from "@/hooks/useFormContext";
import { cn } from "@/lib/utils";
import {
  AttachmentsUploaderFieldSchema,
  AttachmentsUploaderFieldSchemaType,
  NumberSchema,
  NumberSchemaType,
  YesNoFieldSchema,
  YesNoFieldSchemaType,
} from "@/schemas/input-properties";

import AttachmentsUploaderButton from "../../upload-thing-buttons/AttachmentsUploaderButton";
import { FormElement, FormElementInstance } from "../_CentralPlace";

const AttachmentsUploader: FormElement = {
  type: "Attachments",
  construct: (id) => {
    return {
      id: id,
      type: "Attachments",
      attributes: {
        label: "AttachmentsUploader label",
        defaultValue: 10,
        required: true,
        placeholder: "placeholder here",
        helperText: "helper text here",
        styles: {
          width: "full",
          alignment: "left",
        },
      },
    };
  },
  designerComponent: AttachmentsUploaderDesignerComponent,
  sidebarComponent: "Attachments",
  propertiesComponent: AttachmentsUploaderPropertiesComponent,
  previewComponent: AttachmentsUploaderPreviewComponent,
  submitComponent: AttachmentsUploaderSubmitComponent,
};

export function AttachmentsUploaderDesignerComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  return <AttachmentsUploaderButton preview />;
}

export function AttachmentsUploaderPropertiesComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const { selectedElement } = useFormContext();

  const { updateElement } = useFormContext();

  const form = useForm<AttachmentsUploaderFieldSchemaType>({
    resolver: zodResolver(AttachmentsUploaderFieldSchema),
    defaultValues: {
      label: elementInstance?.attributes?.label || "No label",
      helperText: elementInstance?.attributes?.helperText || "helper text here",
      required: elementInstance?.attributes?.required || true,
    },
    mode: "all",
  });

  function onSubmit(values: AttachmentsUploaderFieldSchemaType) {
    updateElement(elementInstance.id, {
      ...elementInstance,
      attributes: {
        ...values,
      },
    });
  }

  useEffect(() => {
    form.reset(elementInstance.attributes);
  }, [elementInstance, selectedElement, form]);

  return (
    <Form {...form}>
      <form
        onBlur={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-y-5"
      >
        <FormField
          control={form.control}
          name="label"
          render={({ field }) => {
            return (
              <FormItem className="mt-5 flex flex-col gap-y-2.5">
                <FormLabel>Field Label</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <FormField
          control={form.control}
          name="required"
          render={({ field }) => {
            return (
              <FormItem className="mt-5 flex flex-col gap-y-2.5">
                <FormLabel>Field Label</FormLabel>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <FormField
          control={form.control}
          name="helperText"
          render={({ field }) => {
            return (
              <FormItem className="flex flex-col gap-y-2.5">
                <FormLabel>Helper Text</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
      </form>
    </Form>
  );
}

export function AttachmentsUploaderPreviewComponent({
  elementInstance,
  field,
  fieldState,
}: {
  elementInstance: FormElementInstance;
  field?: ControllerRenderProps<Record<string, string>, string>;
  fieldState?: ControllerFieldState;
}) {
  return (
    <div className="flex w-full flex-col items-start gap-y-1">
      <AttachmentsUploaderButton />
    </div>
  );
}

export function AttachmentsUploaderSubmitComponent({
  elementInstance,
  setFormValues,
}: {
  elementInstance: FormElementInstance;
  setFormValues: React.Dispatch<
    React.SetStateAction<{ [key: string]: string }>
  >;
}) {
  return (
    <div className="flex w-full flex-col items-start gap-y-1">
      Submit Element
    </div>
  );
}

export default AttachmentsUploader;
