import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

import { Skeleton } from "@/components/ui/skeleton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <header className="flex h-16 items-center justify-end gap-4 border border-gray-500 p-4">
        <SignedOut>
          <SignInButton />
          <SignUpButton>
            <button className="text-ceramic-white h-10 cursor-pointer rounded-full bg-[#6c47ff] px-4 text-sm font-medium sm:h-12 sm:px-5 sm:text-base">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <ClerkLoading>
            <Skeleton className="h-7 w-7 rounded-full bg-gray-500"></Skeleton>
          </ClerkLoading>
          <ClerkLoaded>
            <UserButton />
          </ClerkLoaded>
        </SignedIn>
      </header>
      {children}
    </div>
  );
}
