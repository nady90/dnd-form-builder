import { FormBuilderElementType } from "../buttons/question-type-button/QuestionTypeButton";
import TextField from "./text-field/TextField";

export type AllElementsType = "TextField";

export type FormElement = {
  type: AllElementsType;
  designerComponent: React.FC<{ elementInstance: FormElementInstance }>;
  sidebarComponent: FormBuilderElementType;
  propertiesComponent: React.FC<{ elementInstance: FormElementInstance }>;
  previewComponent: React.FC<{ elementInstance: FormElementInstance }>;
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
};
