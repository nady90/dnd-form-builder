import React from "react";

import ActionCard from "@/components/custom/cards/action-card/ActionCard";
import Grid4to1 from "@/components/layouts/Grid4to1";
import MaxWidthWrapper from "@/components/layouts/MaxWidthWrapper";
import SectionHeading from "@/components/typography/SectionHeading";

export interface IBaseTemplate {
  title: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ title }) => {
  return (
    <div className="py-12">
      <MaxWidthWrapper className="mx-auto">
        <div className="flex flex-col gap-y-6">
          <SectionHeading>{title}</SectionHeading>
          <Grid4to1 className="place-items-center">
            <ActionCard
              text="Start From Scratch"
              subText="Jump right in and build something beautiful"
              variant="add"
            />
            <ActionCard
              text="Start From Scratch"
              subText="Jump right in and build something beautiful"
              variant="add"
            />
            <ActionCard
              text="Start From Scratch"
              subText="Jump right in and build something beautiful"
              variant="add"
            />
            <ActionCard
              text="Start From Scratch"
              subText="Jump right in and build something beautiful"
              variant="add"
            />
          </Grid4to1>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default BaseTemplate;
