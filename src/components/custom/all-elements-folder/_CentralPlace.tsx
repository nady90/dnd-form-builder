import {
  ControllerFieldState,
  ControllerRenderProps,
  UseFormReturn,
} from "react-hook-form";

import { FormBuilderElementType } from "../buttons/question-type-button/QuestionTypeButton";
import ParagraphField from "./paragraph/Paragraph";
import SeparatorField from "./separator/Separator";
import SpacerField from "./spacer/Spacer";
import SubTitleField from "./sub-title/SubTitle";
import TextField from "./text-field/TextField";
import TitleField from "./title/Title";

export type AllElementsType =
  | "TextField"
  | "Title"
  | "SubTitle"
  | "Paragraph"
  | "Separator"
  | "Spacer";

export type FormElement = {
  type: AllElementsType;
  designerComponent: React.FC<{ elementInstance: FormElementInstance }>;
  sidebarComponent: FormBuilderElementType;
  propertiesComponent: React.FC<{
    elementInstance: FormElementInstance;
  }>;
  previewComponent: React.FC<{
    elementInstance: FormElementInstance;
    field: ControllerRenderProps<Record<string, string>, string>;
    fieldState: ControllerFieldState;
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
    required?: boolean;
    placeholder?: string;
    helperText?: string;
    defaultValue?: string;
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
};
