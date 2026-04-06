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
import { NumberSchema, NumberSchemaType } from "@/schemas/input-properties";

import { FormElement, FormElementInstance } from "../_CentralPlace";

const Number: FormElement = {
  type: "Number",
  construct: (id) => {
    return {
      id: id,
      type: "Number",
      attributes: {
        label: "Number label here",
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
  designerComponent: NumberDesignerComponent,
  sidebarComponent: "Number",
  propertiesComponent: NumberPropertiesComponent,
  previewComponent: NumberPreviewComponent,
  submitComponent: NumberSubmitComponent,
};

export function NumberDesignerComponent({
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
        type="number"
        readOnly
        name={elementInstance.id}
        id={elementInstance.id}
        className="pointer-events-none gap-x-1 rounded-md border border-gray-200 bg-white px-2 py-1.5 text-center text-xs font-light text-gray-400"
        value={elementInstance.attributes.defaultValue}
      />
      {elementInstance.attributes.helperText && (
        <p className="text-xs font-light text-gray-500">
          {elementInstance.attributes.helperText}
        </p>
      )}
    </div>
  );
}

export function NumberPropertiesComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const { selectedElement } = useFormContext();

  const { updateElement } = useFormContext();

  const form = useForm<NumberSchemaType>({
    resolver: zodResolver(NumberSchema),
    defaultValues: {
      label: elementInstance?.attributes?.label || "No label",
      required: elementInstance?.attributes?.required ?? false,
      helperText: elementInstance?.attributes?.helperText || "helper text here",
      defaultValue: 10,
    },
    mode: "all",
  });

  function onSubmit(values: NumberSchemaType) {
    updateElement(elementInstance.id, {
      ...elementInstance,
      attributes: {
        ...values,
      },
    });
  }

  useEffect(() => {
    form.reset({
      ...elementInstance.attributes,
      defaultValue: parseInt(elementInstance.attributes.defaultValue as string),
    });
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
          name="defaultValue"
          render={({ field }) => {
            return (
              <FormItem className="mt-5 flex flex-col gap-y-2.5">
                <FormLabel>Default value</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="number"
                    onChange={(e) => {
                      field.onChange(parseInt(e.target.value));
                    }}
                  />
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
              <FormItem className="flex flex-col gap-y-2.5">
                <FormLabel>Required</FormLabel>
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

export function NumberPreviewComponent({
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
      <Label
        htmlFor={elementInstance.id}
        className={cn(
          "relative text-sm font-medium text-gray-800",
          fieldState?.error && "text-red-500",
        )}
      >
        {elementInstance?.attributes?.label || "No label"}
        {elementInstance?.attributes?.required && (
          <FaStarOfLife className="absolute top-0 -right-2 h-[7.5px] w-[7.5px] text-red-500" />
        )}
      </Label>
      <Input
        {...field}
        type="number"
        name={elementInstance.id}
        id={elementInstance.id}
        className="rounded-md border border-gray-200 bg-white px-2 py-1.5 text-center text-xs font-light text-gray-400"
        defaultValue={elementInstance.attributes.defaultValue}
      />
      {elementInstance.attributes.helperText && (
        <p className="text-xs font-light text-gray-500">
          {elementInstance.attributes.helperText}
        </p>
      )}
      {fieldState?.error?.message && (
        <p className="text-xs font-medium text-red-500">
          {fieldState.error.message}
        </p>
      )}
    </div>
  );
}

export function NumberSubmitComponent({
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

export default Number;
