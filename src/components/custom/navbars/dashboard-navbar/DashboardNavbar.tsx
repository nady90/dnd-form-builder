import React from "react";

import EducationIcon from "@/components/icons/Education";
import InfoIcon from "@/components/icons/Info";
import Logo from "@/components/icons/Logo";

import DefaultButton from "../../buttons/default-button/DefaultButton";
import SecondaryButton from "../../buttons/secondary-butotn/SecondaryButton";

const DashboardNavbar: React.FC = () => {
  return (
    <div className="flex h-[60px] flex-col justify-center border-b border-gray-200">
      <div className="flex h-full w-full flex-row items-center justify-between px-2 md:px-8">
        <Logo className="h-[35px] cursor-pointer md:h-[40px] md:w-[117px]" />
        <div className="flex flex-row items-center gap-x-2.5">
          <SecondaryButton icon={InfoIcon}>Give Feedback</SecondaryButton>
          <DefaultButton icon={EducationIcon}>Learn More</DefaultButton>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
