import React from "react";

import Attachments from "@/components/icons/Attachments";
import Boolean from "@/components/icons/Boolean";
import Checkbox from "@/components/icons/Checkbox";
import Checklist from "@/components/icons/Checklist";
import DateIcon from "@/components/icons/Date";
import DateAndTime from "@/components/icons/DateAndTime";
import Dropdown from "@/components/icons/Dropdown";
import HeaderIcon from "@/components/icons/HeaderIcon";
import ImageIcon from "@/components/icons/ImageIcon";
import MultiLine from "@/components/icons/MultiLine";
import Number from "@/components/icons/Number";
import ParagraphIcon from "@/components/icons/ParagraphIcon";
import Profile from "@/components/icons/Profile";
import Sections from "@/components/icons/Sections";
import SeparatorIcon from "@/components/icons/SeparatorIcon";
import Slider from "@/components/icons/Slider";
import SpacerIcon from "@/components/icons/SpacerIcon";
import SubHeaderIcon from "@/components/icons/SubHeaderIcon";
import Table from "@/components/icons/Table";
import Text from "@/components/icons/Text";
import { cn } from "@/lib/utils";

export type FormBuilderElementType =
  | "Sections"
  | "Tables"
  | "TextField"
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
  | "Slider"
  | "Title"
  | "SubTitle"
  | "Paragraph"
  | "Separator"
  | "Spacer";

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
      {variant === "TextField" && <Text />}
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
      {variant === "Title" && <HeaderIcon />}
      {variant === "SubTitle" && <SubHeaderIcon />}
      {variant === "Paragraph" && <ParagraphIcon />}
      {variant === "Separator" && <SeparatorIcon />}
      {variant === "Spacer" && <SpacerIcon />}
      <div className="text-[12px] text-gray-800 capitalize">{variant}</div>
    </div>
  );
};

export default QuestionTypeButton;
