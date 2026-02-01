import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "motion/react";
import { Dispatch, FormEvent, SetStateAction } from "react";

import AiInputIcon from "@/components/icons/AISearchIcon";
import useFormContext from "@/hooks/useFormContext";

import AiButton from "../../buttons/ai-button/AiButton";

export default function AiDialog({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const { setIsAiLoading, setElements, setSelectedElement } = useFormContext();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setIsModalOpen(false);
    setIsAiLoading(true);

    const res = await fetch("/api/v1/ai", { method: "POST" });
    const data = await res.json();
    setElements((prev) => {
      const newElements = [...prev, ...data.data];

      return newElements;
    });
    setIsAiLoading(false);
  }

  return (
    <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
      <Dialog.Trigger asChild>
        <span
          onClick={() => {
            setSelectedElement(null);
          }}
        >
          <AiButton className="fixed right-3.5 bottom-8 z-50 shadow-xl hover:shadow-2xl" />
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
                  onSubmit={handleSubmit}
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
  );
}
