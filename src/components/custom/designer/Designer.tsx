import { DragEndEvent, useDndMonitor, useDroppable } from "@dnd-kit/core";
import React from "react";

import useFormContext from "@/hooks/useFormContext";
import { cn, getRandomIdString } from "@/lib/utils";

import {
  AllElementsType,
  FormElements,
} from "../all-elements-folder/_CentralPlace";
import DesignerComponentWrapper from "../designer-component-wrapper/DesignerComponentWrapper";

const Designer: React.FC = () => {
  const { elements, addElement } = useFormContext();
  const droppable = useDroppable({
    id: "designer-area",
    data: {
      isDesignerArea: true,
    },
  });

  useDndMonitor({
    onDragEnd: (event: DragEndEvent) => {
      const { active, over } = event;
      if (!over || !active) return;

      const isSidebarBtn = active?.data?.current?.isSidebarBtn;

      // Scenario 1: Dragging from the sidebar to the designer area
      if (isSidebarBtn) {
        const type = active?.data?.current?.type;

        const newElement =
          FormElements[type as AllElementsType].construct(getRandomIdString());
        addElement(newElement, elements.length);
      }
    },
  });

  return (
    <div
      ref={droppable.setNodeRef}
      className={cn(
        "flex grow flex-col gap-y-5 bg-white px-2 py-3",
        droppable.isOver && "outline-2 outline-blue-500",
      )}
    >
      {elements.length === 0 && !droppable.isOver && (
        <div className="flex h-full w-full items-center justify-center p-8 text-xl">
          Drag elements from the sidebar to add
        </div>
      )}
      {elements.length === 0 && droppable.isOver && (
        <div className="flex h-[120px] w-full items-center justify-center bg-blue-200 p-8 text-xl"></div>
      )}
      {elements.map((el, idx) => {
        return <DesignerComponentWrapper el={el} key={idx} />;
      })}
    </div>
  );
};

export default Designer;
