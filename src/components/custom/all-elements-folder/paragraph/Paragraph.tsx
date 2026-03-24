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
import { Textarea } from "@/components/ui/textarea";
import useFormContext from "@/hooks/useFormContext";
import { cn } from "@/lib/utils";
import {
  ParagraphSchema,
  ParagraphSchemaType,
} from "@/schemas/input-properties";

import { FormElement, FormElementInstance } from "../_CentralPlace";

const ParagraphField: FormElement = {
  type: "Paragraph",
  construct: (id) => {
    return {
      id: id,
      type: "Paragraph",
      attributes: {
        content:
          "A paragraph is a distinct section of writing that usually deals with a single theme or idea. It typically consists of multiple sentences that are logically connected, helping to organize thoughts and improve readability in any written text.",
        required: true,
        styles: {
          width: "full",
          alignment: "left",
        },
      },
    };
  },
  designerComponent: ParagraphDesignerComponent,
  sidebarComponent: "Paragraph",
  propertiesComponent: ParagraphPropertiesComponent,
  previewComponent: ParagraphPreviewComponent,
  submitComponent: ParagraphSubmitComponent,
};

export function ParagraphDesignerComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  return (
    <div className="flex w-full flex-col items-start gap-y-1">
      <p
        id={elementInstance.id}
        className=""
        defaultValue={
          elementInstance.attributes.defaultValue || "No default value"
        }
      >
        {elementInstance.attributes.content}
      </p>
    </div>
  );
}

export function ParagraphPropertiesComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const { selectedElement } = useFormContext();

  const { updateElement } = useFormContext();

  const form = useForm<ParagraphSchemaType>({
    resolver: zodResolver(ParagraphSchema),
    defaultValues: {
      content: elementInstance?.attributes?.content || "No label",
    },
    mode: "all",
  });

  function onSubmit(values: ParagraphSchemaType) {
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
          name="content"
          render={({ field }) => {
            return (
              <FormItem className="mt-5 flex flex-col gap-y-2.5">
                <FormLabel>Field Label</FormLabel>
                <FormControl>
                  <Textarea {...field} />
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

export function ParagraphPreviewComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  return (
    <p className="flex w-full flex-col items-start gap-y-1">
      {elementInstance.attributes.content}
    </p>
  );
}

export function ParagraphSubmitComponent({
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
      <Label
        htmlFor={elementInstance.id}
        className="relative text-sm font-medium text-gray-800"
      >
        {elementInstance?.attributes?.label || "No label"}
        {elementInstance?.attributes?.required && (
          <FaStarOfLife className="absolute top-0 -right-2 h-[7.5px] w-[7.5px] text-red-500" />
        )}
      </Label>
      <Input
        onChange={(e) => {
          setFormValues((prev) => {
            const newFormValues = { ...prev };
            prev[elementInstance.id] = e.target.value;
            return newFormValues;
          });
        }}
        name={elementInstance.id}
        id={elementInstance.id}
        className="w-full gap-x-1 rounded-none border border-gray-200 bg-white px-2 py-1.5 text-xs font-light text-gray-400"
        defaultValue={
          elementInstance.attributes.defaultValue || "No default value"
        }
      />
      {elementInstance.attributes.helperText && (
        <p className="text-xs font-light text-gray-500">
          {elementInstance.attributes.helperText}
        </p>
      )}
    </div>
  );
}

export default ParagraphField;
