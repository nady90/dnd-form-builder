"use client";
import React, { useEffect } from "react";

import ErrorCard from "@/components/custom/cards/error-card/ErrorCard";

export default function SubmitPageError({ error }: { error: Error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
      <ErrorCard
        code="404"
        title="An error occurred on the page"
        description="We couldn't find what you were looking for. Please check and try again"
        buttonText="Go Back Home"
        redirectUrl="/dashboard"
      />
    </div>
  );
}
