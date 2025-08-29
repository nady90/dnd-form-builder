import { useDraggable, useDroppable } from "@dnd-kit/core";
import React from "react";

import useFormContext from "@/hooks/useFormContext";
import { cn } from "@/lib/utils";

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

  const topHalf = useDroppable({
    id: "topHalf-" + el.id,
    data: {
      elementId: el.id,
      type: el.type,
      isTopHalf: true,
    },
  });

  const bottomHalf = useDroppable({
    id: "bottomHalf-" + el.id,
    data: {
      elementId: el.id,
      type: el.type,
      isBottomHalf: true,
    },
  });

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
      className="group relative cursor-grab"
      ref={draggable.setNodeRef}
      {...draggable.attributes}
      {...draggable.listeners}
    >
      {/* Hovered Div */}
      <div
        className={cn(
          "absolute top-0 right-0 z-[99999] flex h-full w-full items-center justify-center bg-gray-800/70 text-center opacity-0",
          !bottomHalf.isOver && !topHalf.isOver && "group-hover:opacity-100",
        )}
      >
        <span className="text-base text-white">
          Click for properties or drag to move
        </span>
      </div>
      {/* Top droppable */}
      <div
        ref={topHalf.setNodeRef}
        className={cn(
          "absolute top-0 right-0 flex h-1/2 w-full items-center justify-center bg-red-500/20 text-2xl opacity-0 outline outline-gray-800 outline-dashed",
          topHalf.isOver && "opacity-100",
        )}
      >
        <span className="animate-up-arrow">↑</span>
      </div>
      <DesignerComponent elementInstance={el} />
      {/* Bottom droppable */}
      <div
        ref={bottomHalf.setNodeRef}
        className={cn(
          "absolute right-0 bottom-0 flex h-1/2 w-full items-center justify-center bg-blue-500/20 text-2xl opacity-0 outline outline-gray-800 outline-dashed",
          bottomHalf.isOver && "opacity-100",
        )}
      >
        <span className="animate-down-arrow">↓</span>
      </div>
    </div>
  );
}
