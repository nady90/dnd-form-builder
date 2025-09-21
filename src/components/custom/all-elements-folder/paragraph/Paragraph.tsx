import React from "react";

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
  return (
    <p className="text-base font-normal">{elementInstance.attributes.label}</p>
  );
}

export function SeparatorPropertiesComponent() {
  return <div>NO SHIT HERE</div>;
}

export function SeparatorPreviewComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  return (
    <h1 className="text-base font-normal">
      {elementInstance.attributes.label}
    </h1>
  );
}

export function SeparatorSubmitComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  return (
    <h1 className="text-base font-normal">
      {elementInstance.attributes.label}
    </h1>
  );
}

export default SeparatorField;
