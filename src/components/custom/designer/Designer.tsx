"use client";
import { DragEndEvent, useDndMonitor, useDroppable } from "@dnd-kit/core";
import React from "react";

import { Skeleton } from "@/components/ui/skeleton";
import { OverElementNotFound } from "@/errors/dnd-errors";
import useFormContext from "@/hooks/useFormContext";
import { cn, getRandomIdString } from "@/lib/utils";

import { TextShimmerWave } from "../../../../components/motion-primitives/text-shimmer-wave";
import {
  AllElementsType,
  FormElements,
} from "../all-elements-folder/_CentralPlace";
import DesignerComponentWrapper from "../designer-component-wrapper/DesignerComponentWrapper";

const Designer: React.FC = () => {
  const {
    elements,
    addElement,
    changeElementPosition,
    setSelectedElement,
    selectedElement,
    isAiLoading,
  } = useFormContext();
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
      const isDroppingOverDesignerDropArea =
        over?.data?.current?.isDesignerArea;

      const droppingOverTopHalf = over?.data?.current?.isTopHalf;
      const droppingOverBottomHalf = over?.data?.current?.isBottomHalf;

      const isDesignerComponent = active?.data?.current?.isDesignerComponent;
      const droppingOverADesignerComponent =
        droppingOverTopHalf || droppingOverBottomHalf;

      const droppingSidebarButtonOverDesignerDropArea =
        isSidebarBtn && isDroppingOverDesignerDropArea;

      const droppingSidebarButtonOverBuilderComponent =
        isSidebarBtn && droppingOverADesignerComponent;

      const droppingADesignerElementOverAnoterDesignerElement =
        isDesignerComponent && droppingOverADesignerComponent;

      // Scenario 1: Dragging from the sidebar to the designer area
      if (droppingSidebarButtonOverDesignerDropArea) {
        const type = active?.data?.current?.type;

        const newElement =
          FormElements[type as AllElementsType].construct(getRandomIdString());
        addElement(newElement, elements.length);
      }

      // Scenario 1: Dragging from the sidebar on an already existing component
      if (droppingSidebarButtonOverBuilderComponent) {
        let finalIndexToDropOn;
        const newElementType = active?.data?.current?.type as AllElementsType;
        const newElementInstance =
          FormElements[newElementType].construct(getRandomIdString());

        finalIndexToDropOn = elements.findIndex(
          (el) => el.id === over?.data?.current?.elementId,
        );

        if (finalIndexToDropOn === -1) throw new OverElementNotFound();

        if (droppingOverBottomHalf) {
          finalIndexToDropOn++;
        }

        addElement(newElementInstance, finalIndexToDropOn);
      }

      // Scenario 3: Dragging a component over another component
      if (droppingADesignerElementOverAnoterDesignerElement) {
        changeElementPosition(
          active?.data?.current?.id,
          over?.data?.current?.elementId,
          droppingOverBottomHalf,
        );
      }
    },
  });

  // PLAN:
  // CHANGE THE ROUTE TO /API/V1/AI
  // 1. Finish the POST route that returns mock elements
  // 2. Show a loader of these mock elements on the designer
  // 3. Show the elements (isAiGenerated style) BUT with an animation
  // 4. Exit animation for unaccepted results NO FOR ALL RESULTS.
  // 5. Toast for accepted results => change them to look normal

  // LATER:
  // api user validation
  // api return Zod Validation
  // axios and data access layer and dto
  // api handeling errors on the back and the front
  // MAIN DESIGNER LOADING THIS SHIT FIX

  return (
    <div
      data-testid="builder"
      ref={droppable.setNodeRef}
      className={cn(
        "flex grow flex-col gap-y-5 bg-white px-5 py-3",
        droppable.isOver && "outline-2 outline-blue-500",
      )}
      onClick={() => {
        if (selectedElement) {
          setSelectedElement(null);
        }
      }}
    >
      {elements.length === 0 && !droppable.isOver && !isAiLoading && (
        <div className="flex h-full w-full items-center justify-center p-8 text-xl">
          Drag elements from the sidebar to add
        </div>
      )}
      {elements.length === 0 && droppable.isOver && (
        <div className="flex h-[120px] w-full items-end justify-end border-2 border-dashed border-blue-400 bg-blue-200 p-8 text-xl text-blue-400">
          Drop here to add new element
        </div>
      )}
      {elements.map((el, idx) => {
        return <DesignerComponentWrapper el={el} key={idx} />;
      })}

      {elements.length > 0 && droppable.isOver && (
        <div className="flex h-[120px] w-full items-end justify-end border-2 border-dashed border-blue-400 bg-blue-200 p-8 text-xl text-blue-400">
          Drop here to add new element
        </div>
      )}

      {isAiLoading && (
        <div>
          <TextShimmerWave
            className="[--base-color:#0D74CE] [--base-gradient-color:#5EB1EF]"
            duration={1}
            spread={1}
            zDistance={1}
            scaleDistance={1.1}
            rotateYDistance={20}
          >
            Creating the survey questions...
          </TextShimmerWave>
          <div className="bg-accent flex min-h-[200px] flex-col gap-y-2 p-4">
            <Skeleton className="h-[60px] rounded-none bg-purple-400">
              <div className="rounded-none p-2 text-transparent">
                Generating AI Element
              </div>
            </Skeleton>
            <Skeleton className="h-[60px] rounded-none bg-pink-300 delay-200">
              <div className="p-2 text-transparent">Generating AI Element</div>
            </Skeleton>
            <Skeleton className="h-[60px] rounded-none bg-blue-200">
              <div className="p-2 text-transparent">Generating AI Element</div>
            </Skeleton>
          </div>
        </div>
      )}
    </div>
  );
};

export default Designer;
