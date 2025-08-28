"use client";
import React, { useState } from "react";

import { FormElementInstance } from "@/components/custom/all-elements-folder/_CentralPlace";

type FormContextType = {
  elements: FormElementInstance[];
  addElement: (element: FormElementInstance, index: number) => void;
  setSelectedElement: React.Dispatch<
    React.SetStateAction<FormElementInstance | null>
  >;
  selectedElement: FormElementInstance | null;
  updateElement: (id: string, element: FormElementInstance) => void;
  removeElement: (id: string) => void;
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

  return (
    <FormContext.Provider
      value={{
        elements,
        addElement,
        selectedElement,
        setSelectedElement,
        updateElement,
        removeElement,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
