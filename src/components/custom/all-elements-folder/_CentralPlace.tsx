import { FormBuilderElementType } from "../buttons/question-type-button/base/QuestionTypeButton";
import TextField from "./text-field/TextField";

export type AllElementsType = "TextField";

export type FormElement = {
  type: AllElementsType;
  designerComponent: React.FC<{ elementInstance: FormElementInstance }>;
  sidebarComponent: FormBuilderElementType;
  propertiesComponent: React.FC<{ elementInstance: FormElementInstance }>;
  construct: (id: string) => FormElementInstance;
};

export type FormElementInstance = {
  id: string;
  type: AllElementsType;
  attributes: {
    label?: string;
    required?: boolean;
    placeholder?: string;
    helperText?: string;
    defaultValue?: string;
  };
};

type FormElementsType = {
  [key in AllElementsType]: FormElement;
};

export const FormElements: FormElementsType = {
  TextField: TextField,
};
