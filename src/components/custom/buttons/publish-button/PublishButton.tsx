import { useRouter } from "next/navigation";
import React, { useTransition } from "react";
import { CgSpinner } from "react-icons/cg";
import { toast } from "sonner";

import { PublishFormContentAction } from "@/actions/form";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { FormPublishError } from "@/errors/form-errors";

import NavbarBtn from "../navbar-button/NavbarBtn";

const PublishButton = ({ formId }: { formId: number }) => {
  const [isLoading, startTransition] = useTransition();
  const router = useRouter();

  async function publishForm() {
    try {
      await PublishFormContentAction(formId);
      toast.success("Success!");
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong", {
        description: "Could NOT publish the form. Please try again.",
      });
      const err = error as Error;
      throw new FormPublishError(err.message);
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <NavbarBtn loading={isLoading} variety="publish">
          Publish
        </NavbarBtn>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will make the form available to
            anyone who has the link.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              startTransition(publishForm);
            }}
          >
            {!isLoading && <span>Continue</span>}
            {isLoading && <CgSpinner className="animate-spin" />}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default PublishButton;
