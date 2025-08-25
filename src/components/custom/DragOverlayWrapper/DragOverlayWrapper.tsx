import { Active, DragOverlay, useDndMonitor } from "@dnd-kit/core";
import React, { useState } from "react";

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

  let node;
  if (isSidebarBtn) {
    node = <QuestionTypeButton variant={activeItem?.data?.current?.type} />;
  }

  return <DragOverlay>{node}</DragOverlay>;
}
