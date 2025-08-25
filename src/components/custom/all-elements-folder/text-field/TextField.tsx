import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
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
import useFormContext from "@/hooks/useFormContext";
import {
  TextFieldSchema,
  TextFieldSchemaType,
} from "@/schemas/input-properties";

import { FormElement, FormElementInstance } from "../_CentralPlace";

const TextField: FormElement = {
  type: "TextField",
  construct: (id) => {
    return {
      id: id,
      type: "TextField",
      attributes: {
        label: "label here",
        defaultValue: "default value here",
        required: true,
        placeholder: "placeholder here",
        helperText: "helper text here",
      },
    };
  },
  designerComponent: TextFieldDesignerComponent,
  sidebarComponent: "TextField",
  propertiesComponent: TextFieldPropertiesComponent,
  draggedComponent: TextFieldDraggedComponent,
};

export function TextFieldDesignerComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
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
        name={elementInstance.id}
        id={elementInstance.id}
        className="w-full gap-x-1 rounded-none border border-gray-200 px-2 py-1.5 text-xs font-light text-gray-400"
        defaultValue={
          elementInstance.attributes.defaultValue || "No default value"
        }
      />
    </div>
  );
}

export function TextFieldPropertiesComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const { selectedElement } = useFormContext();

  const { updateElement } = useFormContext();

  const form = useForm<TextFieldSchemaType>({
    resolver: zodResolver(TextFieldSchema),
    defaultValues: {
      label: elementInstance?.attributes?.label || "No label",
      required: elementInstance?.attributes?.required || true,
    },
  });

  function onSubmit(values: TextFieldSchemaType) {
    console.log("values:", values);
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
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="label"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Label</FormLabel>
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

export function TextFieldDraggedComponent() {
  return (
    <div className="flex w-full flex-col items-start gap-y-1">
      <Label className="relative text-sm font-medium text-gray-800">
        <FaStarOfLife className="absolute top-0 -right-2 h-[7.5px] w-[7.5px] text-red-500" />
      </Label>
      <Input
        className="w-full gap-x-1 rounded-none border border-gray-200 px-2 py-1.5 text-xs font-light text-gray-400"
        defaultValue={"default value"}
      />
    </div>
  );
}

export default TextField;
