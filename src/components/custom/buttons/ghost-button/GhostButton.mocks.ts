import BackArrow from "@/components/icons/BackArrow";

import { IGhostButton } from "./GhostButton";

const base: IGhostButton = {
  text: "Cancel",
};

const withIcon: IGhostButton = {
  text: "Cancel",
  icon: BackArrow,
};

export const mockGhostButtonProps = {
  base,
  withIcon,
};
