import React from "react";

import Attachments from "@/components/icons/Attachments";
import Boolean from "@/components/icons/Boolean";
import Checkbox from "@/components/icons/Checkbox";
import Checklist from "@/components/icons/Checklist";
import DateIcon from "@/components/icons/Date";
import DateAndTime from "@/components/icons/DateAndTime";
import Dropdown from "@/components/icons/Dropdown";
import ImageIcon from "@/components/icons/ImageIcon";
import MultiLine from "@/components/icons/MultiLine";
import Number from "@/components/icons/Number";
import Profile from "@/components/icons/Profile";
import Sections from "@/components/icons/Sections";
import Slider from "@/components/icons/Slider";
import Table from "@/components/icons/Table";
import Text from "@/components/icons/Text";
import { cn } from "@/lib/utils";

export type FormBuilderElementType =
  | "Sections"
  | "Tables"
  | "Single Line"
  | "Multiline"
  | "Number"
  | "date"
  | "Date & Time"
  | "Dropdown"
  | "Profiles"
  | "Checklist"
  | "Yes/No"
  | "Checkbox"
  | "Attachments"
  | "Image"
  | "Slider";

export interface IQuestionTypeButton {
  className?: string;
  variant: FormBuilderElementType;
}

const QuestionTypeButton: React.FC<IQuestionTypeButton> = ({
  className,
  variant,
}) => {
  return (
    <div
      className={cn(
        "flex min-h-[39px] max-w-[114px] min-w-[101px] items-center gap-2 rounded-md border border-gray-300 bg-gray-100 px-2 py-3",
        className,
      )}
    >
      {variant === "Sections" && <Sections />}
      {variant === "Tables" && <Table />}
      {variant === "Single Line" && <Text />}
      {variant === "Multiline" && <MultiLine />}
      {variant === "Number" && <Number />}
      {variant === "date" && <DateIcon />}
      {variant === "Date & Time" && <DateAndTime />}
      {variant === "Dropdown" && <Dropdown />}
      {variant === "Profiles" && <Profile />}
      {variant === "Checklist" && <Checklist />}
      {variant === "Yes/No" && <Boolean />}
      {variant === "Checkbox" && <Checkbox />}
      {variant === "Attachments" && <Attachments />}
      {variant === "Image" && <ImageIcon />}
      {variant === "Slider" && <Slider />}
      <div className="text-[12px] text-gray-800 capitalize">{variant}</div>
    </div>
  );
};

export default QuestionTypeButton;
