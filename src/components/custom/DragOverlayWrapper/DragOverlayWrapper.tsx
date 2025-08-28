import { Active, DragOverlay, useDndMonitor } from "@dnd-kit/core";
import React, { useState } from "react";

import useFormContext from "@/hooks/useFormContext";

import {
  AllElementsType,
  FormElements,
} from "../all-elements-folder/_CentralPlace";
import QuestionTypeButton from "../buttons/question-type-button/base/QuestionTypeButton";

export default function DragOverlayWrapper() {
  const { elements } = useFormContext();
  const [activeItem, setActiveItem] = useState<null | Active>(null);

  useDndMonitor({
    onDragStart: ({ active }) => {
      console.log("active:", active);
      setActiveItem(active);
    },
    onDragEnd: () => {
      setActiveItem(null);
    },
    onDragCancel: () => {
      setActiveItem(null);
    },
  });

  if (!activeItem) return null;
  const isSidebarBtn = activeItem?.data?.current?.isSidebarBtn;
  const isDesignerComponent = activeItem?.data?.current?.isDesignerComponent;

  let node;
  if (isSidebarBtn) {
    node = (
      <div className="-rotate-12 cursor-grabbing rounded-md outline outline-blue-500">
        <QuestionTypeButton variant={activeItem?.data?.current?.type} />
      </div>
    );
  }

  if (isDesignerComponent) {
    const Element =
      FormElements[activeItem?.data?.current?.type as AllElementsType]
        .designerComponent;

    const elementId = activeItem?.data?.current?.id;

    const elementInsace = elements.find((el) => el.id === elementId);

    if (!elementInsace) {
      node = (
        <div className="rounded-md bg-red-500 p-4 text-black">
          Element Not Found
        </div>
      );
    } else {
      node = (
        <div className="bg-gray-200 p-5 opacity-70">
          <Element elementInstance={elementInsace} />
        </div>
      );
    }
  }

  return <DragOverlay>{node}</DragOverlay>;
}
