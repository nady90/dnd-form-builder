import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

import Logo from "@/components/icons/Logo";
import { Skeleton } from "@/components/ui/skeleton";

import PrimaryButton from "../../buttons/primary-button/PrimaryButton";

const DashboardNavbar: React.FC = () => {
  return (
    <header className="flex h-[60px] flex-col justify-center border-b border-gray-200">
      <div className="flex h-full w-full flex-row items-center justify-between px-2 md:px-8">
        <Link href={"/"}>
          <Logo className="h-[35px] cursor-pointer md:h-[40px] md:w-[117px]" />
        </Link>
        <div className="flex flex-row items-center gap-x-2">
          <SignedOut>
            <ClerkLoading>
              <div className="flex flex-row items-center gap-x-2">
                <Skeleton className="">
                  <PrimaryButton className="opacity-0">Sign In</PrimaryButton>
                </Skeleton>
                <Skeleton>
                  <PrimaryButton className="opacity-0">Sign Out</PrimaryButton>
                </Skeleton>
              </div>
            </ClerkLoading>
            <ClerkLoaded>
              <SignInButton>
                <PrimaryButton className="border border-blue-500">
                  Sign In
                </PrimaryButton>
              </SignInButton>
              <SignUpButton>
                <PrimaryButton className="border border-blue-500 bg-white text-blue-500 hover:bg-gray-100">
                  Sign Out
                </PrimaryButton>
              </SignUpButton>
            </ClerkLoaded>
          </SignedOut>
          <SignedIn>
            <ClerkLoading>
              <Skeleton className="h-7 w-7 rounded-full bg-gray-500"></Skeleton>
            </ClerkLoading>
            <ClerkLoaded>
              <UserButton />
            </ClerkLoaded>
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;
