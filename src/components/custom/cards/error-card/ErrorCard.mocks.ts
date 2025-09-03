import { IErrorCard } from "./ErrorCard";

const base: IErrorCard = {
  code: "404",
  title: "An error occurred on the page",
  description:
    "We couldn&apos;t find what you were looking for. Please check and try again.",
  buttonText: "Go Back Home",
  redirectUrl: "/dashboard",
};

export const mockErrorCardProps = {
  base,
};
