import Link from "next/link";
import React from "react";
import Confetti from "react-confetti";
import { toast } from "sonner";

import BackArrow from "@/components/icons/BackArrow";
import Logo from "@/components/icons/Logo";
import SuccessIcon from "@/components/icons/SuccessIcon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Form } from "../../../../node_modules/generated/prisma";

export default function PublishedSuccessSection({ form }: { form: Form }) {
  const shareUrl = window.location.origin + "/submit/" + form.shareURL;

  function copyText() {
    navigator.clipboard.writeText(shareUrl);
    toast.success("Link Copied!");
  }

  return (
    <div className="fixed top-0 left-0 flex h-screen w-screen flex-col items-center gap-y-10 bg-gray-50 pt-[56px]">
      <Link href={"/dashboard"}>
        <Logo className="h-[56px] w-[184px]" />
      </Link>
      <div className="flex max-h-[338px] max-w-[384px] flex-col items-center gap-y-2 rounded-sm bg-white p-[33px] text-center text-gray-800">
        <SuccessIcon />
        <h1 className="text-xl font-bold">Form Published!</h1>
        <p className="text-base text-gray-500">
          Anyone with this link can view and submit the form
        </p>
        <Input
          readOnly
          value={shareUrl}
          className="cursor-pointer"
          onClick={() => {
            copyText();
          }}
        />
        <Button
          className="w-full cursor-pointer bg-blue-500 hover:bg-blue-600"
          onClick={() => {
            copyText();
          }}
        >
          Copy link
        </Button>
        <div className="flex w-full flex-row items-center justify-between py-2.5 text-xs text-gray-800">
          <Link
            href={"/dashboard"}
            className="flex flex-row items-center gap-x-1 hover:text-black"
          >
            <BackArrow />
            <span>Go back home</span>
          </Link>
          <Link
            href={`/dashboard/form/${form.id}`}
            className="flex flex-row items-center gap-x-1 hover:text-black"
          >
            <span>Form details</span>
            <BackArrow className="rotate-180" />
          </Link>
        </div>
      </div>
      <span className="text-sm text-gray-500">© 2025 SnapForm</span>
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        numberOfPieces={300}
        gravity={0.2}
      />
    </div>
  );
}
