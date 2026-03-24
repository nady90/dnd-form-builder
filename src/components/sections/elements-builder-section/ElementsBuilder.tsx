"use client";
import React, { useMemo, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

import QuestionTypeButton, {
  FormBuilderElementType,
} from "@/components/custom/buttons/question-type-button/QuestionTypeButton";
import SearchBar from "@/components/custom/search-bar/base/SearchBar";
import SidebarBtnWrapper from "@/components/custom/SidebarBtnWrapper/SidebarBtnWrapper";
import useFormContext from "@/hooks/useFormContext";
import { cn } from "@/lib/utils";

interface ElementsSection {
  title: string;
  elements: FormBuilderElementType[];
}

const elementsSections: ElementsSection[] = [
  {
    title: "Layout Elements",
    elements: ["Title", "SubTitle", "Paragraph", "Separator", "Spacer"],
  },
  {
    title: "Text Elements",
    elements: ["TextField", "Multiline", "Number"],
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
  const [searchTerm, setSearchTerm] = useState("");
  const { setSelectedElement, selectedElement } = useFormContext();

  const debouncedSearch = (value: string) => {
    setSearchTerm(value.trim().toLowerCase());
  };

  const filteredSections = useMemo(() => {
    if (!searchTerm) return elementsSections;

    return elementsSections
      .map((section) => ({
        ...section,
        elements: section.elements.filter(
          (element) =>
            element.toLowerCase().includes(searchTerm) ||
            section.title.toLowerCase().includes(searchTerm),
        ),
      }))
      .filter((section) => section.elements.length > 0);
  }, [searchTerm]);

  return (
    <div
      className={cn("max-w-[279px] bg-white px-5 py-9", className)}
      onClick={() => {
        if (selectedElement) setSelectedElement(null);
      }}
    >
      <SearchBar className="mb-9.5" onChange={debouncedSearch} />
      {!filteredSections.length && (
        <div className="text-center text-sm text-gray-500">
          No elements found
        </div>
      )}
      {filteredSections.map((section) => (
        <div key={section.title} className="my-5">
          <h2 className="mb-2.5 text-sm text-gray-500">{section.title}</h2>
          <div className="grid grid-cols-2 gap-2.5">
            {section.elements.map((element) => (
              <SidebarBtnWrapper type={element} key={element}>
                <QuestionTypeButton
                  variant={element}
                  className="w-full cursor-grab"
                />
              </SidebarBtnWrapper>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
// test
export default ElementsBuilder;
