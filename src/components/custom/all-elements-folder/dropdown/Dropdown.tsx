"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { XIcon } from "lucide-react";
import React, { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FieldDescription, FieldLegend, FieldSet } from "@/components/ui/field";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import useFormContext from "@/hooks/useFormContext";
import { DropdownSchema, DropdownSchemaType } from "@/schemas/input-properties";

import { FormElement, FormElementInstance } from "../_CentralPlace";

export const Dropdown: FormElement = {
  type: "Dropdown",
  construct: (id) => {
    return {
      id: id,
      type: "Dropdown",
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
  designerComponent: DropdownDesignerComponent,
  sidebarComponent: "date",
  propertiesComponent: DropdownPropertiesComponent,
  previewComponent: DropdownPreviewComponent,
  submitComponent: DropdownSubmitComponent,
};

function DropdownDesignerComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const [position, setPosition] = React.useState("bottom");

  const items = elementInstance.attributes.dropdownItemsArray || [
    { title: "Item 1" },
    { title: "Item 2" },
    { title: "Item 3" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="pointer-events-none" variant="outline">
          {elementInstance.attributes.label || "Open"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-32">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            {items.map((item, index) => {
              return (
                <DropdownMenuRadioItem key={index} value={item.title}>
                  {item.title}
                </DropdownMenuRadioItem>
              );
            })}
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function DropdownPropertiesComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const { selectedElement } = useFormContext();

  const { updateElement } = useFormContext();

  const form = useForm<DropdownSchemaType>({
    resolver: zodResolver(DropdownSchema),
    defaultValues: {
      label: elementInstance?.attributes?.label || "No label",
      required: elementInstance?.attributes?.required ?? false,
      dropdownItemsArray: [{ title: "" }, { title: "" }, { title: "" }],
    },
    mode: "all",
  });

  function onSubmit(values: DropdownSchemaType) {
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

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "dropdownItemsArray",
  });

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

        <FieldSet>
          <FieldLegend>Dropdown items</FieldLegend>
          <FieldDescription>
            Specify the items in your dropdown list
          </FieldDescription>

          {fields.map((field, index) => {
            return (
              <FormField
                key={field.id}
                control={form.control}
                name={`dropdownItemsArray.${index}.title`}
                render={({ field: itemField }) => {
                  return (
                    <FormItem className="flex flex-col gap-y-2.5">
                      <FormLabel>Item {index + 1}:</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type="string"
                            {...itemField}
                            placeholder={`Item ${index + 1}`}
                          />
                          <XIcon
                            onClick={() => {
                              remove(index);
                            }}
                            className="absolute top-1/2 right-2 w-4 -translate-y-1/2 hover:scale-110"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            );
          })}

          <Button
            disabled={fields.length === 5}
            type="button"
            onClick={() => {
              if (fields.length < 5) append({ title: "" });
            }}
          >
            Add item
          </Button>
        </FieldSet>
      </form>
    </Form>
  );
}

function DropdownPreviewComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const [position, setPosition] = React.useState("bottom");

  const items = elementInstance.attributes.dropdownItemsArray || [
    { title: "Item 1" },
    { title: "Item 2" },
    { title: "Item 3" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="" variant="outline">
          {elementInstance.attributes.label || "Open"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-32">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            {items.map((item, index) => {
              return (
                <DropdownMenuRadioItem key={index} value={item.title}>
                  {item.title}
                </DropdownMenuRadioItem>
              );
            })}
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function DropdownSubmitComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  return <div></div>;
}
