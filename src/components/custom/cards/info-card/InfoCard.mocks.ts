import { getRandomDate } from "@/lib/utils";

import { IInfoCard } from "./InfoCard";

const base: IInfoCard = {
  name: "employment form",
  description: "",
  createdAt: getRandomDate(90),

  visits: 3,
  published: true,
  loading: false,
};

const draft: IInfoCard = {
  name: "employment form",
  description: "",
  createdAt: getRandomDate(90),
  visits: 0,
  published: false,
  loading: false,
};

const loading: IInfoCard = {
  name: "employment form",
  description: "",
  createdAt: getRandomDate(90),
  visits: 0,
  published: false,
  loading: true,
};

export const mockInfoCardProps = {
  base,
  draft,
  loading,
};
