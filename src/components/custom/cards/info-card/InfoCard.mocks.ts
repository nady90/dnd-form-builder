import { IInfoCard } from "./InfoCard";

const base: IInfoCard = {
  name: "employment form",
  description: "",
  date: "about 1 hour ago",
  views: 3,
  published: true,
};

const draft: IInfoCard = {
  name: "employment form",
  description: "",
  date: "about 1 hour ago",
  views: 0,
  published: false,
};

export const mockInfoCardProps = {
  base,
  draft,
};
