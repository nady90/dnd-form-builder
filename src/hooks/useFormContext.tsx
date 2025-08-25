"use client";
import { useContext } from "react";

import { FormContext } from "@/contexts/FormContext";
import { ContextNotFoundError } from "@/errors/context-errors";

export default function useFormContext() {
  const context = useContext(FormContext);
  if (!context) {
    throw new ContextNotFoundError();
  }

  return context;
}
