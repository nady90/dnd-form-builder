import React from "react";

import QuestionTypeButton, {
  FormBuilderElementType,
} from "@/components/custom/buttons/question-type-button/base/QuestionTypeButton";
import SearchBar from "@/components/custom/search-bar/base/SearchBar";
import { cn } from "@/lib/utils";

interface ElementsSection {
  title: string;
  elements: FormBuilderElementType[];
}

const elementsSections: ElementsSection[] = [
  {
    title: "Layout Elements",
    elements: ["Sections", "Tables"],
  },
  {
    title: "Text Elements",
    elements: ["Single Line", "Multiline", "Number"],
  },
  {
    title: "Date Elements",
    elements: ["date", "Date & Time"],
  },
  {
    title: "Multi Elements",
    elements: ["Dropdown", "Profiles", "Checklist", "Yes/No", "Checkbox"],
  },
  {
    title: "Media Elements",
    elements: ["Attachments", "Image", "Slider"],
  },
];
export interface IElementsBuilder {
  className?: string;
}

const ElementsBuilder: React.FC<IElementsBuilder> = ({ className }) => {
  return (
    <div className={cn("max-w-[279px] bg-white px-5 py-9", className)}>
      <SearchBar className="mb-9.5" />
      {elementsSections.map((section) => (
        <div key={section.title} className="my-5">
          <h2 className="mb-2.5 text-sm text-gray-500">{section.title}</h2>
          <div className="grid grid-cols-2 gap-2.5">
            {section.elements.map((element) => (
              <QuestionTypeButton
                key={element}
                variant={element}
                className="w-full cursor-grab"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ElementsBuilder;
