import type { Category } from "@/types/Finance";

export interface IFinanceCategoryActionModalContent {
  onClose: () => void;
}
export interface IFinanceCategoryActionModalButton extends IFinanceCategoryActionModalContent {
  label: string;
  isSubmitting: boolean;
}

export type FinanceCategoryFormValues = Pick<Category, "name">;
