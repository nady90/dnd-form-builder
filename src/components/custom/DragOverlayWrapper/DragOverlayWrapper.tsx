import { Active, DragOverlay, useDndMonitor } from "@dnd-kit/core";
import React, { useState } from "react";

import {
  AllElementsType,
  FormElements,
} from "../all-elements-folder/_CentralPlace";
import QuestionTypeButton from "../buttons/question-type-button/base/QuestionTypeButton";

export default function DragOverlayWrapper() {
  const [activeItem, setActiveItem] = useState<null | Active>(null);

  useDndMonitor({
    onDragStart: ({ active }) => {
      console.log(active);
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
    node = <QuestionTypeButton variant={activeItem?.data?.current?.type} />;
  }

  if (isDesignerComponent) {
    const Element =
      FormElements[activeItem?.data?.current?.type as AllElementsType]
        .draggedComponent;

    node = <Element />;
  }

  return <DragOverlay>{node}</DragOverlay>;
}
