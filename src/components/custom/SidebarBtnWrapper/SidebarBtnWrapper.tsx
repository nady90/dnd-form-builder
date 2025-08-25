import { useDraggable } from "@dnd-kit/core";
import React from "react";

import { FormBuilderElementType } from "../buttons/question-type-button/base/QuestionTypeButton";

export default function SidebarBtnWrapper({
  children,
  type,
}: {
  children: React.ReactNode;
  type: FormBuilderElementType;
}) {
  const draggable = useDraggable({
    id: "sidebar-btn-" + type,
    data: {
      type,
      isSidebarBtn: true,
    },
  });

  return (
    <div
      ref={draggable.setNodeRef}
      {...draggable.listeners}
      {...draggable.attributes}
    >
      {children}
    </div>
  );
}
