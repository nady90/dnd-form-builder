"use client";
import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import React, { useId } from "react";

import ElementsBuilder from "@/components/sections/elements-builder-section/base/ElementsBuilder";
import { Form } from "@/generated/prisma";

import Designer from "../designer/Designer";
import DragOverlayWrapper from "../DragOverlayWrapper/DragOverlayWrapper";
import PropertiesSidebar from "../properties-sidebar/PropertiesSidebar";

export interface IBuilder {
  form: Form;
}

const Builder: React.FC<IBuilder> = () => {
  const id = useId();

  const mouseSensor = useSensor(MouseSensor, {
    // Require the mouse to move by 10 pixels before activating
    activationConstraint: {
      distance: 10,
    },
  });
  const touchSensor = useSensor(TouchSensor, {
    // Press delay of 250ms, with tolerance of 5px of movement
    activationConstraint: {
      delay: 250,
      tolerance: 5,
    },
  });

  const sensors = useSensors(mouseSensor, touchSensor);

  return (
    <DndContext id={id} sensors={sensors}>
      <div className="flex grow flex-row gap-x-5 bg-gray-50">
        <ElementsBuilder className="" />
        <Designer />
        <PropertiesSidebar />
        <DragOverlayWrapper />
      </div>
    </DndContext>
  );
};

export default Builder;
