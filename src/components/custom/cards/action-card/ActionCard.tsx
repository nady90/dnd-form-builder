"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

import AddIcon from "@/components/icons/Add";
import AICardIcon from "@/components/icons/AiCardIcon";
import BackArrow from "@/components/icons/BackArrow";
import ImportCardIcon from "@/components/icons/ImportCardIcon";
import TemplateCardIcon from "@/components/icons/TemplateCardIcon";
import { Dialog, DialogClose, DialogTrigger } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createFormSchema, CreateFormSchemaType } from "@/schemas/form";

import GhostButton from "../../buttons/ghost-button/GhostButton";
import PrimaryButton from "../../buttons/primary-button/PrimaryButton";
import DialogCard from "../dialog-card/DialogCard";

export interface IActionCard {
  text: string;
  subText: string;
  variant: "add" | "template" | "import" | "ai";
  submitHandler: (values: CreateFormSchemaType) => void;
}

const ActionCard: React.FC<IActionCard> = ({
  text,
  subText,
  variant,
  submitHandler,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group flex min-w-[200px] cursor-pointer flex-col items-center gap-y-3 text-center">
          <div className="flex h-[134px] w-[127px] items-center justify-center border border-gray-100 transition-all duration-300 group-hover:bg-blue-500">
            {variant === "add" && (
              <AddIcon className="h-[45px] w-[46px] transition-all duration-300 group-hover:h-[54px] group-hover:w-[54px]" />
            )}
            {variant === "template" && (
              <TemplateCardIcon className="h-[92px] w-[59px] transition-all duration-300 group-hover:h-[106px] group-hover:w-[74px]" />
            )}
            {variant === "import" && (
              <ImportCardIcon className="h-[92px] w-[59px] transition-all duration-300 group-hover:h-[106px] group-hover:w-[74px]" />
            )}

            {variant === "ai" && (
              <AICardIcon className="h-[105px] w-[108px] scale-90 transition-all duration-300 group-hover:scale-100" />
            )}
          </div>
          <div className="flex max-w-[197px] flex-col">
            <p className="text-base font-semibold text-gray-800">{text}</p>
            <p className="text-sm font-light text-gray-500">{subText}</p>
          </div>
        </div>
      </DialogTrigger>
      <DialogCard
        title={"Create Form"}
        description="Create a new form from scratch to start collecting responses."
      >
        <CardForm onSubmit={submitHandler} />
      </DialogCard>
    </Dialog>
  );
};

export function CardForm({
  onSubmit,
}: {
  onSubmit: (values: CreateFormSchemaType) => void;
}) {
  const form = useForm<CreateFormSchemaType>({
    resolver: zodResolver(createFormSchema),
    defaultValues: {
      name: "",
      description: "",
    },
    mode: "onBlur",
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-y-2"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => {
            return (
              <FormItem className="flex flex-col gap-y-2">
                <FormLabel className="text-xs text-gray-800">Name</FormLabel>
                <FormControl>
                  <Input
                    className="h-[36px] outline-none focus:border focus:border-blue-500 focus:shadow-none focus:outline-none"
                    placeholder="Ex: Employment Form..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => {
            return (
              <FormItem className="flex flex-col gap-y-2">
                <FormLabel className="text-xs text-gray-800">
                  Description
                </FormLabel>
                <FormControl>
                  <Textarea
                    className="h-[133px] resize-none"
                    placeholder="Descripe your form..."
                    {...field}
                  />
                </FormControl>
              </FormItem>
            );
          }}
        />

        {!form.formState.isSubmitting && (
          <PrimaryButton type="submit" className="w-full">
            save
          </PrimaryButton>
        )}

        {form.formState.isSubmitting && (
          <PrimaryButton disabled type="submit" className="w-full">
            Saving...
          </PrimaryButton>
        )}

        <DialogClose asChild>
          <GhostButton icon={BackArrow}>Cancel</GhostButton>
        </DialogClose>
      </form>
    </Form>
  );
}

export default ActionCard;
