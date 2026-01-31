"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

import AiInputIcon from "@/components/icons/AISearchIcon";
import useFormContext from "@/hooks/useFormContext";

import { FormElements } from "../all-elements-folder/_CentralPlace";
import AiButton from "../buttons/ai-button/AiButton";

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

      <AnimatePresence>
        <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
          <Dialog.Trigger asChild>
            <span>
              <AiButton className="fixed right-3.5 bottom-8 z-50" />
            </span>
          </Dialog.Trigger>
          <AnimatePresence>
            {isModalOpen && (
              <Dialog.Portal forceMount>
                <Dialog.Overlay className="fixed inset-0 flex bg-black/10 backdrop-blur-sm" />
                <Dialog.DialogContent className="ai-input-shadows fixed top-[20%] left-1/2 -translate-x-1/2">
                  <Dialog.DialogTitle className="hidden">
                    Ask AI to generate a form
                  </Dialog.DialogTitle>
                  <div className="relative h-[45px] w-[500px] rounded-[20px]">
                    <motion.form
                      onSubmit={(e) => {
                        e.preventDefault();
                        setIsModalOpen(false);
                      }}
                      initial={{
                        y: -100,
                      }}
                      animate={{
                        y: 0,
                      }}
                      exit={{
                        y: -200,
                        opacity: 0,
                        transition: {
                          duration: 0.2,
                        },
                      }}
                      className="absolute z-20 h-full w-full rounded-[20px] bg-emerald-500"
                    >
                      <AiInputIcon className="pointer-events-none absolute top-1/2 left-4 z-10 h-6 w-6 -translate-y-1/2" />
                      <input
                        id="search-ai"
                        className="absolute h-full w-full rounded-[20px] bg-black px-12 text-white placeholder:text-white focus:outline-0"
                        placeholder="Type what you need"
                      />
                      <button type="submit"></button>
                    </motion.form>
                    <motion.div
                      initial={{
                        y: -100,
                      }}
                      animate={{
                        y: 0,
                      }}
                      exit={{
                        y: -200,
                        opacity: 0,
                        transition: {
                          duration: 0.2,
                        },
                      }}
                      className="absolute top-1/2 left-1/2 z-10 h-[53px] w-[510px] -translate-x-1/2 -translate-y-1/2 rounded-[22px] bg-linear-60 from-[#BEDBFF] to-[#2B7FFF]"
                    ></motion.div>
                  </div>
                </Dialog.DialogContent>
              </Dialog.Portal>
            )}
          </AnimatePresence>
        </Dialog.Root>
      </AnimatePresence>
    </div>
  );
}
