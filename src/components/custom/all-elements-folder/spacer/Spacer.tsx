import React from "react";

import { FormElement, FormElementInstance } from "../_CentralPlace";

const SpacerField: FormElement = {
  type: "Spacer",
  construct: (id) => {
    return {
      id: id,
      type: "Spacer",
      attributes: {
        label: "Normal Spacer",
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
  return <div className="h-[50px]"></div>;
}

export function SpacerPropertiesComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  return <div>PUT A SLIDER HERE</div>;
}

export function SpacerPreviewComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  return <div className="h-[50px]"></div>;
}

export function SpacerSubmitComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  return <div className="h-[50px]"></div>;
}

export default SpacerField;
