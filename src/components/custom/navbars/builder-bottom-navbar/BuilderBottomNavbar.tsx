"use client";
import Link from "next/link";
import React from "react";
import { toast } from "sonner";

import ExportIcon from "@/components/icons/ExportIcon";

import NavbarBtn from "../../buttons/navbar-button/NavbarBtn";

export interface IBuilderBottomNavbar {
  link: string;
}

const BuilderBottomNavbar: React.FC<IBuilderBottomNavbar> = ({ link }) => {
  return (
    <div className="flex h-[45px] flex-row justify-between border-b border-gray-200 px-5 py-2.5">
      <div className="flex flex-row items-center gap-x-2.5 text-base font-normal">
        <p className="text-gray-500">Link:</p>
        <Link
          href={link}
          target="_blank"
          className="max-w-[250px] truncate text-gray-800 underline hover:text-blue-500"
        >
          {link}
        </Link>
        <ExportIcon
          role="button"
          aria-label="copy link"
          className="cursor-pointer transition-all duration-300 hover:scale-110"
          onClick={() => {
            navigator.clipboard.writeText(link);
            toast.success("Copied text to clipboard");
          }}
        />
      </div>

      <div className="flex flex-row gap-x-2.5">
        <NavbarBtn loading={false} variety="delete">
          Delete
        </NavbarBtn>
        <NavbarBtn loading={false} variety="preview">
          Preview
        </NavbarBtn>
        <NavbarBtn loading={false} variety="save">
          Save & Publish
        </NavbarBtn>
      </div>
    </div>
  );
};

export default BuilderBottomNavbar;
