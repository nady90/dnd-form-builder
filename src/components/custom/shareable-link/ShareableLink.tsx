"use client";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";

import PrimaryButton from "../buttons/primary-button/PrimaryButton";

export default function ShareableLink({ shareURL }: { shareURL: string }) {
  const [shareUrl, setShareUrl] = useState<null | string>(null);

  useEffect(() => {
    setShareUrl(`${window.location.origin}/submit/${shareURL}`);
  }, [shareURL]);

  if (!shareUrl) {
    return null;
  }

  return (
    <>
      <Input
        className="cursor-pointer"
        onClick={() => {
          navigator.clipboard.writeText(shareUrl);
          toast.success("Text copied!");
        }}
        readOnly
        value={shareUrl}
      />
      <PrimaryButton
        onClick={() => {
          navigator.clipboard.writeText(shareUrl);
          toast.success("Text copied!");
        }}
        className="w-[191px] cursor-pointer"
      >
        Share Link
      </PrimaryButton>
    </>
  );
}
