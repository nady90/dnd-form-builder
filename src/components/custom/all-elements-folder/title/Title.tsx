import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useFormContext from "@/hooks/useFormContext";
import { TitleSchema, TitleSchemaType } from "@/schemas/input-properties";

import { FormElement, FormElementInstance } from "../_CentralPlace";

const TitleField: FormElement = {
  type: "Title",
  construct: (id) => {
    return {
      id: id,
      type: "Title",
      attributes: {
        label: "Main Header",
        styles: {
          width: "full",
          alignment: "left",
        },
      },
    };
  },
  designerComponent: TitleDesignerComponent,
  sidebarComponent: "Title",
  propertiesComponent: TitlePropertiesComponent,
  previewComponent: TitlePreviewComponent,
  submitComponent: TitleSubmitComponent,
};

export function TitleDesignerComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  return (
    <h1 className="text-2xl font-bold">{elementInstance.attributes.label}</h1>
  );
}

export function TitlePropertiesComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const { selectedElement } = useFormContext();

  const { updateElement } = useFormContext();

  const form = useForm<TitleSchemaType>({
    resolver: zodResolver(TitleSchema),
    defaultValues: {
      label: elementInstance?.attributes?.label || "No label",
    },
  });

  function onSubmit(values: TitleSchemaType) {
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
      </form>
    </Form>
  );
}

export function TitlePreviewComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  return (
    <h1 className="text-2xl font-bold">{elementInstance.attributes.label}</h1>
  );
}

export function TitleSubmitComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  return (
    <h1 className="text-2xl font-bold">{elementInstance.attributes.label}</h1>
  );
}

export default TitleField;
