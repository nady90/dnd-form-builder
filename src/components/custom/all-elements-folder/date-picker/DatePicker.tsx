import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import React, { useEffect } from "react";
import {
  ControllerFieldState,
  ControllerRenderProps,
  useForm,
} from "react-hook-form";
import { FaStarOfLife } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Field, FieldLabel } from "@/components/ui/field";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Switch } from "@/components/ui/switch";
import useFormContext from "@/hooks/useFormContext";
import { cn } from "@/lib/utils";
import {
  DateFieldSchema,
  DateFieldSchemaType,
} from "@/schemas/input-properties";

import { FormElement, FormElementInstance } from "../_CentralPlace";

const DatePicker: FormElement = {
  type: "date",
  construct: (id) => {
    return {
      id: id,
      type: "date",
      attributes: {
        label: "label here",
        defaultValue: "default value here",
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
  designerComponent: DatePickerDesignerComponent,
  sidebarComponent: "date",
  propertiesComponent: DatePickerPropertiesComponent,
  previewComponent: DatePickerPreviewComponent,
  submitComponent: DatePickerSubmitComponent,
};

export function DatePickerDesignerComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const [date, setDate] = React.useState<Date>();

  return (
    <Field className="w-full">
      <FieldLabel htmlFor="date-picker-simple">
        <span className="relative">
          {elementInstance.attributes.label || "Date"}{" "}
          <span>
            {elementInstance.attributes.required && (
              <FaStarOfLife className="absolute top-0 -right-2 h-[7.5px] w-[7.5px] text-red-500" />
            )}
          </span>
        </span>
      </FieldLabel>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date-picker-simple"
            className="w-full justify-start font-normal"
          >
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            defaultMonth={date}
          />
        </PopoverContent>
      </Popover>
    </Field>
  );
}

export function DatePickerPropertiesComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const form = useForm<DateFieldSchemaType>({
    resolver: zodResolver(DateFieldSchema),
    defaultValues: {
      label: elementInstance.attributes.label,
    },
    mode: "all",
  });

  const { selectedElement } = useFormContext();

  const { updateElement } = useFormContext();

  function onSubmit(values: DateFieldSchemaType) {
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

export function DatePickerPreviewComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const [date, setDate] = React.useState<Date>();
  console.log("Date Only: ", date);

  return (
    <Field className="w-full">
      <FieldLabel htmlFor="date-picker-simple">
        <span className="relative">
          {elementInstance.attributes.label || "Date"}{" "}
          <span>
            {elementInstance.attributes.required && (
              <FaStarOfLife className="absolute top-0 -right-2 h-[7.5px] w-[7.5px] text-red-500" />
            )}
          </span>
        </span>
      </FieldLabel>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date-picker-simple"
            className="w-full justify-start font-normal"
          >
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            defaultMonth={date}
          />
        </PopoverContent>
      </Popover>
    </Field>
  );
}

export function DatePickerSubmitComponent({
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

export default DatePicker;
