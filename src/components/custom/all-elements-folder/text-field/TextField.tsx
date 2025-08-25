import React from "react";
import { FaStarOfLife } from "react-icons/fa";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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

export default TextField;
