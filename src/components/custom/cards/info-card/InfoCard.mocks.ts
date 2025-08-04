import { IInfoCard } from "./InfoCard";

const base: IInfoCard = {
  name: "employment form",
  description: "",
  date: "about 1 hour ago",
  views: 3,
  published: true,
  loading: false,
};

const draft: IInfoCard = {
  name: "employment form",
  description: "",
  date: "about 1 hour ago",
  views: 0,
  published: false,
  loading: false,
};

const loading: IInfoCard = {
  name: "employment form",
  description: "",
  date: "about 1 hour ago",
  views: 0,
  published: false,
  loading: true,
};

export const mockInfoCardProps = {
  base,
  draft,
  loading,
};
