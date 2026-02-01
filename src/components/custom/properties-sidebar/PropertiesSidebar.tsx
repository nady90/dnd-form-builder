"use client";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

import useFormContext from "@/hooks/useFormContext";

import { FormElements } from "../all-elements-folder/_CentralPlace";
import AiDialog from "../dialogs/ai-dialog/AiDialog";

export default function PropertiesSidebar() {
  const { selectedElement, elements, setSelectedElement } = useFormContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  let Form;
  if (selectedElement) {
    Form = FormElements[selectedElement.type].propertiesComponent;
  }

  return (
    <div className="flex w-full max-w-[279px] flex-col gap-x-5 bg-white px-5 py-[36px]">
      <div className="flow-row flex justify-between">
        <span className="text-base font-medium text-gray-800">
          Edit the fields
        </span>
        <IoMdClose
          data-testid="sidebar-close-svg"
          onClick={() => setSelectedElement(null)}
          className="cursor-pointer transition-all duration-500 hover:scale-150"
          role="button"
        />
      </div>
      {elements.length === 0 ? (
        <div className="">Drag an element to start</div>
      ) : (
        <div>{!selectedElement && "Click on an element to select"}</div>
      )}
      <div>
        {selectedElement && Form && <Form elementInstance={selectedElement} />}
      </div>

      <AiDialog isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
}
