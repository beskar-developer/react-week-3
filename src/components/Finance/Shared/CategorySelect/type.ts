import type { Category } from "@/types/Finance";

export type FinanceCategorySelectOption = {
  value: Category["id"];
  label: Category["name"];
};

export interface IFinanceCategorySelect {
  value: Category["id"];
  onChange: (value: Category["id"]) => void;
}
