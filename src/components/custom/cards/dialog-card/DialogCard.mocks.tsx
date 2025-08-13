// DialogCard.mocks.ts
import { CardForm } from "../action-card/ActionCard";
import { IDialogCard } from "./DialogCard";

const base: IDialogCard = {
  title: "Create Form",
  description: "Create a new form from scratch to start collecting responses.",
  children: <CardForm onSubmit={() => {}} />,
};

export const mockDialogCardProps = {
  base,
};
