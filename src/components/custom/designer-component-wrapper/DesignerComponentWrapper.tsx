import { useDraggable } from "@dnd-kit/core";
import React from "react";

import useFormContext from "@/hooks/useFormContext";

import {
  FormElementInstance,
  FormElements,
} from "../all-elements-folder/_CentralPlace";

export default function DesignerComponentWrapper({
  el,
}: {
  el: FormElementInstance;
}) {
  const { setSelectedElement } = useFormContext();

  const draggable = useDraggable({
    id: "designer-component-" + el.id,
    data: {
      id: el.id,
      type: el.type,
      isDesignerComponent: true,
    },
  });

  if (draggable.isDragging) {
    return null;
  }

  const DesignerComponent = FormElements[el.type].designerComponent;
  return (
    <div
      onClick={() => {
        setSelectedElement(el);
      }}
      className="cursor-grab rounded-sm px-2 py-2 hover:bg-blue-200"
      ref={draggable.setNodeRef}
      {...draggable.attributes}
      {...draggable.listeners}
    >
      <DesignerComponent elementInstance={el} />
    </div>
  );
}
