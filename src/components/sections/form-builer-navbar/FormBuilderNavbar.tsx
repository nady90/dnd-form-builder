import React from "react";

import BuilderBottomNavbar from "@/components/custom/navbars/builder-bottom-navbar/BuilderBottomNavbar";
import BuilderTopNavbar from "@/components/custom/navbars/builder-top-navbar/BuilderTopNavbar";

export interface IFormBuilderNavbar {
  title: string;
  description: string;
  savedAt: Date;
  link: string;
  closeBtnFn: () => void;
  deletFn: () => void;
  previewFn: () => void;
  saveFn: () => void;
}

const FormBuilderNavbar: React.FC<IFormBuilderNavbar> = ({
  title,
  description,
  savedAt,
  link,
  closeBtnFn,
  deletFn,
  previewFn,
  saveFn,
}) => {
  return (
    <div>
      <BuilderTopNavbar
        title={title}
        description={description}
        savedAt={savedAt}
        closeBtnFn={closeBtnFn}
      />
      <BuilderBottomNavbar
        link={link}
        deleteFn={deletFn}
        previewFn={previewFn}
        saveFn={saveFn}
      />
    </div>
  );
};

export default FormBuilderNavbar;
