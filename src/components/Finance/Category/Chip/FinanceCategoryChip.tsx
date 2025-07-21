import type { Category } from "@/types/Finance";

const CHIP_COLOR_MAP = {
  INCOME: "success",
  EXPENSE: "error",
} as const;
const CHIP_LABEL_MAP = {
  INCOME: "درآمد",
  EXPENSE: "هزینه",
};

export const FinanceCategoryChip = ({ type }: Pick<Category, "type">) => {
  return <Chip color={CHIP_COLOR_MAP[type]}>{CHIP_LABEL_MAP[type]}</Chip>;
};
