import React from "react";

import NavbarBtn from "../navbar-button/NavbarBtn";

const PublishButton: React.FC = () => {
  return (
    <NavbarBtn loading={false} variety="publish" onClick={() => {}}>
      Publish
    </NavbarBtn>
  );
};

export default PublishButton;
