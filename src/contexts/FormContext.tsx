"use client";
import React, { useState } from "react";

import { FormElementInstance } from "@/components/custom/all-elements-folder/_CentralPlace";

type FormContextType = {
  elements: FormElementInstance[];
  addElement: (element: FormElementInstance, index: number) => void;
};

export const FormContext = React.createContext<FormContextType | null>(null);

export default function FormContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [elements, setElements] = useState<FormElementInstance[]>([]);
  console.log("🚀 ~ FormContextProvider ~ elements:", elements);

  function addElement(element: FormElementInstance, index: number) {
    setElements((prev) => {
      const newElements = [...prev];
      newElements.splice(index, 0, element);
      return newElements;
    });
  }

  return (
    <FormContext.Provider value={{ elements, addElement }}>
      {children}
    </FormContext.Provider>
  );
}
