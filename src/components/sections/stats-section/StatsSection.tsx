import React from "react";

import MaxWidthWrapper from "@/components/layouts/MaxWidthWrapper";
import { Skeleton } from "@/components/ui/skeleton";

export interface IStatsSection {
  visits: number;
  submissions: number;
  submissionRate: number;
  bounceRate: number;
  loading: boolean;
}

const StatsSection: React.FC<IStatsSection> = ({
  visits,
  submissions,
  submissionRate,
  bounceRate,
  loading,
}) => {
  return (
    <MaxWidthWrapper className="mx-auto">
      <div className="flex w-full flex-row gap-x-[10px] rounded-lg bg-gray-100 p-2">
        <div className="relative w-full grow">
          <div className="px-6">
            <div className="flex flex-col gap-y-[10px] py-3">
              <p className="text-lg font-semibold text-gray-800">
                Total Visits
              </p>
              {!loading && (
                <p className="text-base font-normal text-gray-800">{visits}</p>
              )}
              {loading && (
                <Skeleton className="h-[27px] bg-gray-300">
                  <p className="opacity-0">0</p>
                </Skeleton>
              )}
              <p className="text-xs font-light text-gray-800">
                All time form visits
              </p>
            </div>
          </div>
          <div className="absolute top-1/2 right-0 block h-[76px] w-[1px] -translate-y-1/2 bg-gray-300"></div>
        </div>
        <div className="relative w-full grow">
          <div className="px-6">
            <div className="flex flex-col gap-y-[10px] py-3">
              <p className="text-lg font-semibold text-gray-800">
                Total Submissions
              </p>
              {!loading && (
                <p className="text-base font-normal text-gray-800">
                  {submissions}
                </p>
              )}
              {loading && (
                <Skeleton className="h-[27px] bg-gray-300">
                  <p className="opacity-0">0</p>
                </Skeleton>
              )}
              <p className="text-xs font-light text-gray-800">
                All time form submissions
              </p>
            </div>
          </div>
          <div className="absolute top-1/2 right-0 block h-[76px] w-[1px] -translate-y-1/2 bg-gray-300"></div>
        </div>
        <div className="relative w-full grow">
          <div className="px-6">
            <div className="flex flex-col gap-y-[10px] py-3">
              <p className="text-lg font-semibold text-gray-800">
                Submissions Rate
              </p>
              {!loading && (
                <p className="text-base font-normal text-gray-800">
                  {submissionRate}%
                </p>
              )}
              {loading && (
                <Skeleton className="h-[27px] bg-gray-300">
                  <p className="opacity-0">0</p>
                </Skeleton>
              )}
              <p className="text-xs font-light text-gray-800">
                Visits that result in form submissions
              </p>
            </div>
          </div>
          <div className="absolute top-1/2 right-0 block h-[76px] w-[1px] -translate-y-1/2 bg-gray-300"></div>
        </div>
        <div className="relative w-full grow">
          <div className="px-6">
            <div className="flex flex-col gap-y-[10px] py-3">
              <p className="text-lg font-semibold text-gray-800">Bounce Rate</p>
              {!loading && (
                <p className="text-base font-normal text-gray-800">
                  {bounceRate}%
                </p>
              )}
              {loading && (
                <Skeleton className="h-[27px] bg-gray-300">
                  <p className="opacity-0">0</p>
                </Skeleton>
              )}
              <p className="text-xs font-light text-gray-800">
                Visits that leave without submission
              </p>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default StatsSection;
