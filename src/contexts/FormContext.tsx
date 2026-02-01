"use client";
import React, { useState } from "react";

import { FormElementInstance } from "@/components/custom/all-elements-folder/_CentralPlace";
import {
  DraggedElementNotFound,
  OverElementNotFound,
} from "@/errors/dnd-errors";

type FormContextType = {
  elements: FormElementInstance[];
  addElement: (element: FormElementInstance, index: number) => void;
  setSelectedElement: React.Dispatch<
    React.SetStateAction<FormElementInstance | null>
  >;
  selectedElement: FormElementInstance | null;
  updateElement: (id: string, element: FormElementInstance) => void;
  removeElement: (id: string) => void;
  changeElementPosition: (
    activeId: string,
    overId: string,
    droppingOverBottomHalf: boolean,
  ) => void;
  changeElementWidth: (width: "full" | "half", el: FormElementInstance) => void;
  changeElementAlignment: (
    alignment: "left" | "center" | "right",
    el: FormElementInstance,
  ) => void;
  setElements: React.Dispatch<React.SetStateAction<FormElementInstance[]>>;
  isAiLoading: boolean;
  setIsAiLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const FormContext = React.createContext<FormContextType | null>(null);

export default function FormContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [elements, setElements] = useState<FormElementInstance[]>([]);
  const [selectedElement, setSelectedElement] =
    useState<null | FormElementInstance>(null);
  const [isAiLoading, setIsAiLoading] = useState<boolean>(false);

  function addElement(element: FormElementInstance, index: number) {
    setElements((prev) => {
      const newElements = [...prev];
      newElements.splice(index, 0, element);
      return newElements;
    });
  }

  function updateElement(id: string, element: FormElementInstance) {
    setElements(() => {
      const newElements = [...elements];
      const index = newElements.findIndex((el) => el.id === id);
      newElements[index] = element;
      return newElements;
    });
  }

  function removeElement(id: string) {
    setElements((prev) => {
      const newElements = prev.filter((el) => el.id !== id);
      return newElements;
    });
  }

  function changeElementPosition(
    activeId: string,
    overId: string,
    droppingOverBottomHalf: boolean,
  ) {
    setElements((prev) => {
      // Copy the elements
      let newElements = [...prev];

      // Get the dragged element
      const draggedElement = newElements.find((el) => el.id === activeId);
      if (!draggedElement) throw new DraggedElementNotFound();

      // Remove the dragged element
      newElements = newElements.filter((el) => el.id !== activeId);

      // Find where to drop the dragged element
      const overElementIndex = newElements.findIndex((el) => el.id === overId);
      if (overElementIndex === -1) throw new OverElementNotFound();

      let indexWhereToDrop;
      indexWhereToDrop = overElementIndex;
      if (droppingOverBottomHalf) {
        indexWhereToDrop++;
      }

      // Drop the new element
      newElements.splice(indexWhereToDrop, 0, draggedElement);
      return newElements;
    });
  }

  function changeElementWidth(
    width: "full" | "half",
    element: FormElementInstance,
  ) {
    setElements(() => {
      const newElements = [...elements];
      const index = newElements.findIndex((el) => el.id === element.id);

      newElements[index] = {
        ...element,
        attributes: {
          ...element.attributes,
          styles: {
            ...element.attributes.styles,
            width: width,
          },
        },
      };

      return newElements;
    });
  }

  function changeElementAlignment(
    alignment: "left" | "center" | "right",
    element: FormElementInstance,
  ) {
    setElements(() => {
      const newElements = [...elements];
      const index = newElements.findIndex((el) => el.id === element.id);

      newElements[index] = {
        ...element,
        attributes: {
          ...element.attributes,
          styles: {
            ...element.attributes.styles,
            alignment: alignment,
          },
        },
      };

      return newElements;
    });
  }

  return (
    <FormContext.Provider
      value={{
        elements,
        addElement,
        selectedElement,
        setSelectedElement,
        updateElement,
        removeElement,
        changeElementPosition,
        changeElementWidth,
        changeElementAlignment,
        setElements,
        isAiLoading,
        setIsAiLoading,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
