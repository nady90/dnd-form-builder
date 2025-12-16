"use client";
import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import React, { useEffect, useId, useState } from "react";

import ElementsBuilder from "@/components/sections/elements-builder-section/ElementsBuilder";
import PublishedSuccessSection from "@/components/sections/published-success-section/PublishedSuccessSection";
import useFormContext from "@/hooks/useFormContext";

import { Form } from "../../../../node_modules/generated/prisma";
import Designer from "../designer/Designer";
import DragOverlayWrapper from "../DragOverlayWrapper/DragOverlayWrapper";
import PropertiesSidebar from "../properties-sidebar/PropertiesSidebar";

export interface IBuilder {
  form: Form;
}

const Builder: React.FC<IBuilder> = ({ form }) => {
  const { setElements } = useFormContext();
  const [isReady, setIsReady] = useState(false);

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

  useEffect(() => {
    setElements(JSON.parse(form.content));
    setIsReady(true);
  }, [form, setElements]);

  if (form.published) {
    return <PublishedSuccessSection form={form} />;
  }

  return (
    <DndContext id={id} sensors={sensors}>
      {!isReady && <div>LOADING THIS SHIT!</div>}
      {isReady && (
        <div className="flex grow flex-row gap-x-5 bg-gray-50">
          <ElementsBuilder className="" />
          <Designer />
          <PropertiesSidebar />
          <DragOverlayWrapper />
        </div>
      )}
    </DndContext>
  );
};

export default Builder;
