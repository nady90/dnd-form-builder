import React from "react";

import ExtraLargeButton from "@/components/custom/buttons/extra-large-button/ExtraLargeButton";
import InfoCard from "@/components/custom/cards/info-card/InfoCard";
import { IInfoCard } from "@/components/custom/cards/info-card/InfoCard";
import FormsFilterBar from "@/components/custom/filter-bars/forms-filter-bar/FormsFilterBar";
import Grid4to1 from "@/components/layouts/Grid4to1";
import MaxWidthWrapper from "@/components/layouts/MaxWidthWrapper";

import StatsSection from "../stats-section/StatsSection";

export interface IAllFormsSection {
  data: Omit<IInfoCard, "loading">[];
  loading: boolean;
  error: boolean;
}

const AllFormsSection: React.FC<IAllFormsSection> = ({
  data,
  loading,
  error,
}) => {
  if (loading) {
    return (
      <div className="flex w-full flex-col items-center px-[10px] py-[40px] sm:gap-y-[40px] sm:px-[40px] lg:px-[112px] lg:py-[56px]">
        <MaxWidthWrapper>
          <div className="flex flex-col items-stretch gap-y-10">
            <div>
              <FormsFilterBar title="all forms" />
            </div>
            <div>
              <StatsSection
                visits={0}
                submissions={0}
                submissionRate={0}
                bounceRate={100}
                loading={true}
              />
            </div>
            <div className="">
              <Grid4to1 className={"xl:gap-x-5 xl:gap-y-5"}>
                {new Array(8).fill(0).map((card, idx) => {
                  return (
                    <InfoCard
                      key={idx}
                      name={card.name}
                      description={card.description}
                      published={card.published}
                      visits={card.views}
                      createdAt={new Date()}
                      loading={loading}
                    />
                  );
                })}
              </Grid4to1>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    );
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className="flex w-full flex-col items-center px-[10px] py-[40px] sm:gap-y-[40px] sm:px-[40px] lg:px-[112px] lg:py-[56px]">
      <MaxWidthWrapper>
        <div className="flex flex-col items-stretch gap-y-6 md:gap-y-10">
          <div>
            <FormsFilterBar title="all forms" />
          </div>
          <div>
            <StatsSection
              visits={0}
              submissions={0}
              submissionRate={0}
              bounceRate={100}
              loading={false}
            />
          </div>
          <div className="">
            <Grid4to1 className={"xl:gap-x-5 xl:gap-y-5"}>
              {data.length > 0 &&
                data.map((card, idx) => {
                  return (
                    <InfoCard
                      key={idx}
                      name={card.name}
                      description={card.description}
                      published={card.published}
                      visits={card.visits}
                      createdAt={card.createdAt}
                      loading={loading}
                    />
                  );
                })}
            </Grid4to1>
            {data.length < 1 && (
              <div className="flex w-full flex-col items-center justify-center gap-y-7 rounded-lg border border-gray-400 py-7 text-center">
                <h3 className="text-5xl font-medium text-gray-500">
                  You have no forms
                </h3>
                <ExtraLargeButton text="Create a form" />
              </div>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default AllFormsSection;
