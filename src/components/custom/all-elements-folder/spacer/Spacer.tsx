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
import { SpacerSchema, SpacerSchemaType } from "@/schemas/input-properties";

import { FormElement, FormElementInstance } from "../_CentralPlace";

const SpacerField: FormElement = {
  type: "Spacer",
  construct: (id) => {
    return {
      id: id,
      type: "Spacer",
      attributes: {
        height: 50,
        styles: {
          width: "full",
          alignment: "left",
        },
      },
    };
  },
  designerComponent: SpacerDesignerComponent,
  sidebarComponent: "Spacer",
  propertiesComponent: SpacerPropertiesComponent,
  previewComponent: SpacerPreviewComponent,
  submitComponent: SpacerSubmitComponent,
};

export function SpacerDesignerComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  return (
    <div
      className=""
      style={{ height: elementInstance.attributes.height }}
    ></div>
  );
}

export function SpacerPropertiesComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const { selectedElement } = useFormContext();

  const { updateElement } = useFormContext();

  const form = useForm<SpacerSchemaType>({
    resolver: zodResolver(SpacerSchema),
    defaultValues: {
      height: selectedElement?.attributes.height,
    },
    mode: "all",
  });

  function onSubmit(values: SpacerSchemaType) {
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

export function SpacerPreviewComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  return (
    <div
      className=""
      style={{ height: elementInstance.attributes.height }}
    ></div>
  );
}

export function SpacerSubmitComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  return (
    <div
      className=""
      style={{ height: elementInstance.attributes.height }}
    ></div>
  );
}

export default SpacerField;
