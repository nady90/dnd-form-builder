"use client";
import Link from "next/link";
import React, { useEffect } from "react";

import PrimaryButton from "@/components/custom/buttons/primary-button/PrimaryButton";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function BuilderError({ error }: { error: Error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
      <Card className="flex h-[284px] w-[347px] flex-col items-stretch rounded-sm bg-white p-10 shadow-sm">
        <CardHeader className="p-0">
          <span className="font-semibold text-gray-500">404</span>
          <CardTitle className="p-0 text-3xl text-gray-800">
            An error occurred on the page
          </CardTitle>
          <CardDescription className="p-0 font-normal text-gray-500">
            We couldn&apos;t find what you were looking for. Please check and
            try again.
          </CardDescription>
        </CardHeader>
        <CardFooter className="p-0">
          <Link className="block w-full" href={"/dashboard"}>
            <PrimaryButton className="w-full">Go Back Home</PrimaryButton>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
