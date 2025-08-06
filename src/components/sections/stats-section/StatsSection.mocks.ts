import { IStatsSection } from "./StatsSection";

const base: IStatsSection = {
  visits: 0,
  submissions: 0,
  submissionRate: 0,
  bounceRate: 100,
  loading: false,
};

const loading: IStatsSection = {
  visits: 0,
  submissions: 0,
  submissionRate: 0,
  bounceRate: 100,
  loading: true,
};

export const mockStatsSectionProps = {
  base,
  loading,
};
