import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
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
  MultiLineSchema,
  MultiLineSchemaType,
} from "@/schemas/input-properties";

import { FormElement } from "../_CentralPlace";
import { FormElementInstance } from "../_CentralPlace";

const MultiLine: FormElement = {
  type: "Multiline",
  construct: (id) => {
    return {
      id: id,
      type: "Multiline",
      attributes: {
        label: "Label for large text area",
        defaultValue: "default value here",
        required: true,
        placeholder:
          "This gives users the ability to enter or handle text that spans more than a single line, ideal for detailed information, comments, or descriptions. It enables free-form text input that spans across lines, unlike the standard input field.",
        helperText: "helper text here",
        styles: {
          width: "full",
          alignment: "left",
        },
      },
    };
  },
  sidebarComponent: "Multiline",
  designerComponent: MultiLineDesignerComponent,
  propertiesComponent: MultiLinePropertiesComponent,
  previewComponent: MultiLinePreviewComponent,
  submitComponent: MultiLineSubmitComponent,
};

export function MultiLineDesignerComponent({
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
      <Textarea
        rows={30}
        readOnly
        name={elementInstance.id}
        id={elementInstance.id}
        className="pointer-events-none min-h-[110px] w-full gap-x-1 rounded-none border border-gray-200 bg-white px-2 py-1.5 text-xs font-light text-gray-400"
        placeholder={elementInstance.attributes.placeholder || "No placeholder"}
      />
      {elementInstance.attributes.helperText && (
        <p className="text-xs font-light text-gray-500">
          {elementInstance.attributes.helperText}
        </p>
      )}
    </div>
  );
}

export function MultiLinePropertiesComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const { selectedElement } = useFormContext();

  const { updateElement } = useFormContext();

  const form = useForm<MultiLineSchemaType>({
    resolver: zodResolver(MultiLineSchema),
    defaultValues: {
      label: elementInstance?.attributes?.label || "No label",
      required: elementInstance?.attributes?.required ?? false,
      helperText: elementInstance?.attributes?.helperText || "helper text here",
      placeholder: elementInstance.attributes.placeholder,
    },
    mode: "all",
  });

  function onSubmit(values: MultiLineSchemaType) {
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
          name="placeholder"
          render={({ field }) => {
            return (
              <FormItem className="mt-5 flex flex-col gap-y-2.5">
                <FormLabel>Placeholder</FormLabel>
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

export function MultiLinePreviewComponent({
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
        className="relative text-sm font-medium text-gray-800"
      >
        {elementInstance?.attributes?.label || "No label"}
        {elementInstance?.attributes?.required && (
          <FaStarOfLife className="absolute top-0 -right-2 h-[7.5px] w-[7.5px] text-red-500" />
        )}
      </Label>
      <Textarea
        {...field}
        rows={30}
        name={elementInstance.id}
        id={elementInstance.id}
        className={cn(
          "min-h-[110px] w-full gap-x-1 rounded-none border border-gray-200 bg-white px-2 py-1.5 text-xs font-light text-gray-400",
          { "border-red-500": fieldState?.error },
        )}
        placeholder={elementInstance.attributes.placeholder || "No placeholder"}
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

export function MultiLineSubmitComponent({
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
      <Textarea
        rows={30}
        readOnly
        name={elementInstance.id}
        id={elementInstance.id}
        className="pointer-events-none w-full gap-x-1 rounded-none border border-gray-200 bg-white px-2 py-1.5 text-xs font-light text-gray-400"
        placeholder={elementInstance.attributes.placeholder || "No placeholder"}
      />
      {elementInstance.attributes.helperText && (
        <p className="text-xs font-light text-gray-500">
          {elementInstance.attributes.helperText}
        </p>
      )}
    </div>
  );
}

export default MultiLine;
