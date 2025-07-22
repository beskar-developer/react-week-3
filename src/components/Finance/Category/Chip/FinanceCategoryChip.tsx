import type { Category } from "@/types/Finance";

import { CATEGORY_TYPE_OPTIONS } from "@/constants/Finance";

const CHIP_COLOR_MAP = {
  INCOME: "success",
  EXPENSE: "error",
} as const;

const CHIP_LABEL_MAP = CATEGORY_TYPE_OPTIONS.reduce(
  (labelMap, { value, label }) => ({
    ...labelMap,
    [value]: label,
  }),
  {} as Record<Category["type"], string>,
);

export const FinanceCategoryChip = ({ type }: Pick<Category, "type">) => {
  return <Chip color={CHIP_COLOR_MAP[type]}>{CHIP_LABEL_MAP[type]}</Chip>;
};
