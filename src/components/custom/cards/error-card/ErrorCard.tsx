import Link from "next/link";
import React from "react";

import PrimaryButton from "@/components/custom/buttons/primary-button/PrimaryButton";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export interface IErrorCard {
  code: string;
  title: string;
  description: string;
  redirectUrl: string;
  buttonText: string;
}

const ErrorCard: React.FC<IErrorCard> = ({
  code,
  title,
  description,
  buttonText,
  redirectUrl,
}) => {
  return (
    <Card className="flex h-[284px] w-[347px] flex-col items-stretch rounded-sm bg-white p-10 shadow-sm">
      <CardHeader className="p-0">
        <span className="font-semibold text-gray-500">{code}</span>
        <CardTitle className="p-0 text-3xl text-gray-800">{title}</CardTitle>
        <CardDescription className="p-0 font-normal text-gray-500">
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="p-0">
        <Link className="block w-full" href={redirectUrl}>
          <PrimaryButton className="w-full">{buttonText}</PrimaryButton>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ErrorCard;
