import React from "react";

import InfoCard, {
  IInfoCard,
} from "@/components/custom/cards/old-info-card/InfoCard";
import FormsFilterBar from "@/components/custom/filter-bars/forms-filter-bar/FormsFilterBar";
import Grid4to1 from "@/components/layouts/Grid4to1";
import MaxWidthWrapper from "@/components/layouts/MaxWidthWrapper";

export interface IAllFormsSection {
  data: IInfoCard[];
  loading: boolean;
  error: boolean;
}

const AllFormsSection: React.FC<IAllFormsSection> = ({
  data,
  loading,
  error,
}) => {
  if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className="flex w-full flex-col items-center px-[10px] py-[40px] sm:gap-y-[40px] sm:px-[40px] lg:px-[112px] lg:py-[56px]">
      <MaxWidthWrapper>
        <div className="flex flex-col items-stretch gap-y-10">
          <div>
            <FormsFilterBar title="all forms" />
          </div>
          <div className="">
            <Grid4to1>
              {data &&
                data.map((card, idx) => {
                  return (
                    <InfoCard
                      key={idx}
                      name={card.name}
                      responses={card.responses}
                      category={card.category}
                    />
                  );
                })}
            </Grid4to1>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default AllFormsSection;
