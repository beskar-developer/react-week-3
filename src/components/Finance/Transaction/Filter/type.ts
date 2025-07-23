import type { Category } from "@/types/Finance";

export type FinanceTransactionFilterSelectOption = {
  value: Category["id"];
  label: Category["name"];
};
