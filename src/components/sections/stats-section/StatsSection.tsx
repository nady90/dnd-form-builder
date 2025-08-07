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
      <div className="hidden xl:block">
        <LargeCardsStats
          visits={visits}
          submissions={submissions}
          submissionRate={submissionRate}
          bounceRate={bounceRate}
          loading={loading}
        />
      </div>
      <div className="hidden md:block xl:hidden">
        <TabletCardsStats
          visits={visits}
          submissions={submissions}
          submissionRate={submissionRate}
          bounceRate={bounceRate}
          loading={loading}
        />
      </div>
      <div className="block md:hidden">
        <MobileCardsStats
          visits={visits}
          submissions={submissions}
          submissionRate={submissionRate}
          bounceRate={bounceRate}
          loading={loading}
        />
      </div>
    </MaxWidthWrapper>
  );
};

function LargeCardsStats({
  visits,
  submissions,
  submissionRate,
  bounceRate,
  loading,
}: {
  visits: number;
  submissions: number;
  submissionRate: number;
  bounceRate: number;
  loading: boolean;
}) {
  return (
    <div className="flex w-full flex-row gap-x-[10px] rounded-lg bg-gray-100 p-2">
      <div className="relative w-full grow">
        <div className="px-6">
          <div className="flex flex-col gap-y-[10px] py-3">
            <p className="text-lg font-semibold text-gray-800">Total Visits</p>
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
  );
}

function TabletCardsStats({
  visits,
  submissions,
  submissionRate,
  bounceRate,
  loading,
}: {
  visits: number;
  submissions: number;
  submissionRate: number;
  bounceRate: number;
  loading: boolean;
}) {
  return (
    <div className="flex w-full flex-row gap-x-2 rounded-lg bg-gray-100 p-2">
      <div className="relative w-full grow bg-white">
        <div className="px-2.5">
          <div className="flex flex-col justify-between py-[28px]">
            <p className="text-base font-semibold text-gray-800">
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
      </div>
      <div className="relative w-full grow bg-white">
        <div className="px-2.5">
          <div className="flex flex-col justify-between py-[28px]">
            <p className="text-base font-semibold text-gray-800">
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
      </div>
      <div className="relative w-full grow bg-white">
        <div className="px-2.5">
          <div className="flex flex-col justify-between py-[28px]">
            <p className="text-base font-semibold text-gray-800">
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
      </div>
      <div className="relative w-full grow bg-white">
        <div className="px-2.5">
          <div className="flex flex-col justify-between py-[28px]">
            <p className="text-base font-semibold text-gray-800">Bounce Rate</p>
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
  );
}

function MobileCardsStats({
  visits,
  submissions,
  submissionRate,
  bounceRate,
  loading,
}: {
  visits: number;
  submissions: number;
  submissionRate: number;
  bounceRate: number;
  loading: boolean;
}) {
  return (
    <div className="flex w-full flex-col justify-between rounded-lg bg-gray-100 p-2 text-center">
      <div className="relative w-full grow bg-white px-6">
        <div className="flex flex-col justify-center gap-y-[10px] py-3">
          <p className="text-lg font-semibold text-gray-800">Total Visits</p>
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
      <div className="relative w-full grow bg-white px-6">
        <div className="flex flex-col justify-center gap-y-[10px] py-3">
          <p className="text-lg font-semibold text-gray-800">
            Total Submissions
          </p>
          {!loading && (
            <p className="text-base font-normal text-gray-800">{submissions}</p>
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
      <div className="relative w-full grow bg-white px-6">
        <div className="flex flex-col justify-center gap-y-[10px] py-3">
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
      <div className="relative w-full grow bg-white px-6">
        <div className="flex flex-col justify-center gap-y-[10px] py-3">
          <p className="text-lg font-semibold text-gray-800">Bounce Rate</p>
          {!loading && (
            <p className="text-base font-normal text-gray-800">{bounceRate}%</p>
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
  );
}

export default StatsSection;
