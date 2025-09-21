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

import { FormElement, FormElementInstance } from "../_CentralPlace";

const SeparatorField: FormElement = {
  type: "Separator",
  construct: (id) => {
    return {
      id: id,
      type: "Separator",
      attributes: {
        label: "Normal Separator",
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
  return <div className="h-[1px] bg-gray-500"></div>;
}

export function SeparatorPropertiesComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  return <div>NO SHIT IN A SPEARATOR</div>;
}

export function SeparatorPreviewComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  return <div className="h-[1px] bg-gray-500"></div>;
}

export function SeparatorSubmitComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  return <div className="h-[1px] bg-gray-500"></div>;
}

export default SeparatorField;
