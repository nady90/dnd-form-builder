"use client";
import { DndContext } from "@dnd-kit/core";
import React from "react";

import ElementsBuilder from "@/components/sections/elements-builder-section/base/ElementsBuilder";
import { Form } from "@/generated/prisma";

import Designer from "../designer/Designer";
import DragOverlayWrapper from "../DragOverlayWrapper/DragOverlayWrapper";
import PropertiesSidebar from "../properties-sidebar/PropertiesSidebar";

export interface IBuilder {
  form: Form;
}

const Builder: React.FC<IBuilder> = ({ form }) => {
  console.log("1:", form);
  return (
    <DndContext>
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
