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
import { SubTitleSchema, SubTitleSchemaType } from "@/schemas/input-properties";

import { FormElement, FormElementInstance } from "../_CentralPlace";

const SubTitleField: FormElement = {
  type: "SubTitle",
  construct: (id) => {
    return {
      id: id,
      type: "SubTitle",
      attributes: {
        label: "Main Header",
        styles: {
          width: "full",
          alignment: "left",
        },
      },
    };
  },
  designerComponent: SubTitleDesignerComponent,
  sidebarComponent: "SubTitle",
  propertiesComponent: SubTitlePropertiesComponent,
  previewComponent: SubTitlePreviewComponent,
  submitComponent: SubTitleSubmitComponent,
};

export function SubTitleDesignerComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  return (
    <h3 className="text-lg font-bold">{elementInstance.attributes.label}</h3>
  );
}

export function SubTitlePropertiesComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const { selectedElement } = useFormContext();

  const { updateElement } = useFormContext();

  const form = useForm<SubTitleSchemaType>({
    resolver: zodResolver(SubTitleSchema),
    defaultValues: {
      label: elementInstance?.attributes?.label || "No label",
    },
  });

  function onSubmit(values: SubTitleSchemaType) {
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

export function SubTitlePreviewComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  return (
    <h1 className="text-lg font-bold">{elementInstance.attributes.label}</h1>
  );
}

export function SubTitleSubmitComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  return (
    <h1 className="text-lg font-bold">{elementInstance.attributes.label}</h1>
  );
}

export default SubTitleField;
