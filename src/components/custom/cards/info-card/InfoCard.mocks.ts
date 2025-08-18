import { getRandomDate } from "@/lib/utils";

import { IInfoCard } from "./InfoCard";

const base: IInfoCard = {
  id: 1,
  name: "employment form",
  description: "",
  createdAt: getRandomDate(90),

  visits: 3,
  published: true,
  loading: false,
};

const draft: IInfoCard = {
  id: 1,
  name: "employment form",
  description: "",
  createdAt: getRandomDate(90),
  visits: 0,
  published: false,
  loading: false,
};

const loading: IInfoCard = {
  id: 1,
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
