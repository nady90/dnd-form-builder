import { useDraggable, useDroppable } from "@dnd-kit/core";
import React from "react";

import AlignCenterIcon from "@/components/icons/AlignCenterIcon";
import AlignLeftIcon from "@/components/icons/AlignLeftIcon";
import AlignRightIcon from "@/components/icons/AlignRightIcon";
import BuilderDeleteIcon from "@/components/icons/BuilderDeleteIcon";
import DuplicateIcon from "@/components/icons/DuplicateIcon";
import GearIcon from "@/components/icons/GearIcon";
import LargeSizeIcon from "@/components/icons/LargeSizeIcon";
import SmallSizeIcon from "@/components/icons/SmallSizeIcon";
import StyleIcon from "@/components/icons/StyleIcon";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
  const { selectedElement, setSelectedElement } = useFormContext();

  const isSelected = !selectedElement ? false : el.id === selectedElement.id;

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
      onClick={(e) => {
        e.stopPropagation();
        setSelectedElement(el);
      }}
      className={cn(
        "group relative cursor-grab",
        isSelected && "border border-blue-500 bg-blue-100 px-3 py-3",
      )}
      ref={draggable.setNodeRef}
      {...draggable.attributes}
      {...draggable.listeners}
    >
      {isSelected && <SelectedUIElements el={el} />}
      {/* Hovered Div */}
      <div
        data-testId="top-half-div"
        className={cn(
          "absolute top-0 right-0 z-[99999] flex h-full w-full items-center justify-center bg-gray-800/70 text-center opacity-0",
          !isSelected &&
            !bottomHalf.isOver &&
            !topHalf.isOver &&
            "group-hover:opacity-100",
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
        data-testId="bottom-half-div"
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

function SelectedUIElements({ el }: { el: FormElementInstance }) {
  const { removeElement } = useFormContext();

  return (
    <>
      <div className="absolute right-[11px] bottom-[-20px] z-50 flex cursor-auto flex-row items-center gap-x-4 rounded-md border border-gray-200 bg-white px-2 py-1.5">
        <Tooltip>
          <TooltipTrigger>
            <DuplicateIcon className="cursor-pointer transition-all duration-300 hover:scale-110" />
          </TooltipTrigger>
          <TooltipContent>Duplicate element</TooltipContent>
        </Tooltip>

        <Tooltip>
          <Popover>
            <TooltipTrigger asChild>
              <PopoverTrigger>
                <StyleIcon className="cursor-pointer transition-all duration-300 hover:scale-110" />
              </PopoverTrigger>
            </TooltipTrigger>
            <TooltipContent>Change style</TooltipContent>
            <StylesSettingsContainer el={el} />
          </Popover>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <GearIcon className="cursor-pointer transition-all duration-300 hover:scale-110" />
          </TooltipTrigger>
          <TooltipContent>Change settings</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger
            onClick={() => {
              removeElement(el.id);
            }}
          >
            <BuilderDeleteIcon className="cursor-pointer transition-all duration-300 hover:scale-110" />
          </TooltipTrigger>
          <TooltipContent>Delete element</TooltipContent>
        </Tooltip>
      </div>
      <DotsDecoration />
    </>
  );
}

function StylesSettingsContainer({ el }: { el: FormElementInstance }) {
  return (
    <PopoverContent asChild>
      <div className="flex min-h-[119px] w-[196px] translate-y-2 flex-col gap-y-1.5 rounded-md border border-gray-200 bg-white px-2 py-1.5 text-xs font-medium text-gray-800">
        <div className="flex flex-col gap-y-0.5">
          <h3 className="text-sm">Styles</h3>
          <p className="font-extralight">Customize the way the element looks</p>
        </div>
        <div className="flex grow flex-col gap-y-0.5">
          <div className="flex flex-row items-center justify-between">
            <span>Size</span>
            <div className="flex flex-row gap-x-4">
              <Tooltip>
                <TooltipTrigger>
                  <div className="group flex h-6 w-6 cursor-pointer items-center justify-center">
                    <SmallSizeIcon className="cursor-pointer transition-all duration-300" />
                  </div>
                </TooltipTrigger>
                <TooltipContent>Half width</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger>
                  <div className="group flex h-6 w-6 cursor-pointer items-center justify-center">
                    <LargeSizeIcon className="cursor-pointer transition-all duration-300" />
                  </div>
                </TooltipTrigger>
                <TooltipContent>Full width</TooltipContent>
              </Tooltip>
            </div>
          </div>

          <div className="flex flex-row items-center justify-between">
            <span>Alignment</span>
            <div className="flex flex-row gap-x-1">
              <Tooltip>
                <TooltipTrigger>
                  <AlignLeftIcon className="cursor-pointer transition-all duration-300" />
                </TooltipTrigger>
                <TooltipContent>Align left</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger>
                  <AlignCenterIcon className="cursor-pointer transition-all duration-300" />
                </TooltipTrigger>
                <TooltipContent>Align center</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger>
                  <AlignRightIcon className="cursor-pointer transition-all duration-300" />
                </TooltipTrigger>
                <TooltipContent>Align right</TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </PopoverContent>
  );
}

function DotsDecoration() {
  return (
    <>
      <div className="absolute top-[-4.0px] left-[-4.0px] h-[9px] w-[9px] rounded-full bg-blue-500"></div>
      <div className="absolute top-[-4.0px] right-[-4.0px] h-[9px] w-[9px] rounded-full bg-blue-500"></div>
      <div className="absolute right-[-4.0px] bottom-[-4.0px] h-[9px] w-[9px] rounded-full bg-blue-500"></div>
      <div className="absolute bottom-[-4.0px] left-[-4.0px] h-[9px] w-[9px] rounded-full bg-blue-500"></div>
    </>
  );
}
