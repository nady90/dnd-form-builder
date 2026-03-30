import { ControllerFieldState, ControllerRenderProps } from "react-hook-form";

import { FormBuilderElementType } from "../buttons/question-type-button/QuestionTypeButton";
import DateAndTimePicker from "./date-and-time/DateAndTime";
import DatePicker from "./date-picker/DatePicker";
import { Dropdown } from "./dropdown/Dropdown";
import MultiLine from "./multi-line/MultiLine";
import Number from "./number/Number";
import ParagraphField from "./paragraph/Paragraph";
import SeparatorField from "./separator/Separator";
import SpacerField from "./spacer/Spacer";
import SubTitleField from "./sub-title/SubTitle";
import TextField from "./text-field/TextField";
import TitleField from "./title/Title";
import YesNoElement from "./yes-no/YesNo";

export type AllElementsType =
  | "TextField"
  | "Title"
  | "SubTitle"
  | "Paragraph"
  | "Separator"
  | "Spacer"
  | "Multiline"
  | "Number"
  | "date"
  | "Date & Time"
  | "Dropdown"
  | "Yes/No";

export type FormElement = {
  type: AllElementsType;
  designerComponent: React.FC<{ elementInstance: FormElementInstance }>;
  sidebarComponent: FormBuilderElementType;
  propertiesComponent: React.FC<{
    elementInstance: FormElementInstance;
  }>;
  previewComponent: React.FC<{
    elementInstance: FormElementInstance;
    field?: ControllerRenderProps<Record<string, string>, string>;
    fieldState?: ControllerFieldState;
  }>;
  submitComponent: React.FC<{
    elementInstance: FormElementInstance;
    setFormValues: React.Dispatch<
      React.SetStateAction<{ [key: string]: string }>
    >;
  }>;
  construct: (id: string) => FormElementInstance;
};

export type FormElementInstance = {
  id: string;
  type: AllElementsType;
  isAiGenerated?: boolean;
  attributes: {
    label?: string;
    content?: string;
    required?: boolean;
    placeholder?: string;
    helperText?: string;
    defaultValue?: string | number;
    height?: number;
    dropdownItemsArray?: { title: string }[];
    styles: {
      width: "half" | "full";
      alignment: "left" | "center" | "right";
    };
  };
};

type FormElementsType = {
  [key in AllElementsType]: FormElement;
};

export const FormElements: FormElementsType = {
  TextField: TextField,
  Title: TitleField,
  SubTitle: SubTitleField,
  Paragraph: ParagraphField,
  Separator: SeparatorField,
  Spacer: SpacerField,
  Multiline: MultiLine,
  Number: Number,
  date: DatePicker,
  ["Date & Time"]: DateAndTimePicker,
  Dropdown: Dropdown,
  ["Yes/No"]: YesNoElement,
};
