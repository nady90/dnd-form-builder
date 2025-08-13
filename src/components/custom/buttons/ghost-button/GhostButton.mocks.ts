import BackArrow from "@/components/icons/BackArrow";

import { IGhostButton } from "./GhostButton";

const base: IGhostButton = {
  children: "Cancel",
};

const withIcon: IGhostButton = {
  children: "Cancel",
  icon: BackArrow,
};

export const mockGhostButtonProps = {
  base,
  withIcon,
};
