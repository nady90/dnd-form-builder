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
import {
  SeparatorSchema,
  SperatorSchemaType,
} from "@/schemas/input-properties";

import { FormElement, FormElementInstance } from "../_CentralPlace";

const SeparatorField: FormElement = {
  type: "Separator",
  construct: (id) => {
    return {
      id: id,
      type: "Separator",
      attributes: {
        label: "Normal Separator",
        height: 1,
        styles: {
          width: "full",
          alignment: "left",
        },
      },
    };
  },
  designerComponent: SeparatorDesignerComponent,
  sidebarComponent: "Separator",
  propertiesComponent: SeparatorPropertiesComponent,
  previewComponent: SeparatorPreviewComponent,
  submitComponent: SeparatorSubmitComponent,
};

export function SeparatorDesignerComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  return (
    <div
      className="bg-gray-500"
      style={{ height: elementInstance.attributes.height }}
    ></div>
  );
}

export function SeparatorPropertiesComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const { selectedElement } = useFormContext();

  const { updateElement } = useFormContext();

  const form = useForm<SperatorSchemaType>({
    resolver: zodResolver(SeparatorSchema),
    defaultValues: {
      height: selectedElement?.attributes.height,
    },
    mode: "all",
  });

  function onSubmit(values: SperatorSchemaType) {
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
        onChange={form.handleSubmit(onSubmit)}
        onSubmit={form.handleSubmit(onSubmit)}
        onBlur={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-y-5"
      >
        <FormField
          control={form.control}
          name="height"
          render={({ field }) => {
            return (
              <FormItem className="mt-5 flex flex-col gap-y-2.5">
                <FormLabel>Separator Height</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    {...field}
                    onChange={(e) => {
                      field.onChange(Number(e.target.value));
                    }}
                  />
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

export function SeparatorPreviewComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  return (
    <div
      className="bg-gray-500"
      style={{ height: elementInstance.attributes.height }}
    ></div>
  );
}

export function SeparatorSubmitComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  return <div className="h-[1px] bg-gray-500"></div>;
}

export default SeparatorField;
