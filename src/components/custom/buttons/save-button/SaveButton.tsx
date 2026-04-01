import React, { useTransition } from "react";
import { toast } from "sonner";

import { UpdateFormContentAction } from "@/actions/form";
import { FormSaveError } from "@/errors/form-errors";
import useFormContext from "@/hooks/useFormContext";

import NavbarBtn from "../navbar-button/NavbarBtn";

const SaveButton = ({ formId }: { formId: number }) => {
  const [isLoading, startTransition] = useTransition();
  const { elements } = useFormContext();

  async function saveContnet() {
    try {
      await UpdateFormContentAction(formId, JSON.stringify(elements));
      toast.success("Saved successfully!");
    } catch (error) {
      toast.error("Did NOT save", {
        description: "Something went wrong while saving your form.",
      });
      const err = error as Error;
      throw new FormSaveError(err.message);
    }
  }

  return (
    <NavbarBtn
      disabled={isLoading}
      loading={isLoading}
      variety="save"
      onClick={() => {
        startTransition(saveContnet);
      }}
    >
      Save
    </NavbarBtn>
  );
};

export default SaveButton;
