import type { Category } from "@/types/Finance";

export const FinanceCategoryCardContent = ({ name, type }: Pick<Category, "name" | "type">) => {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm font-semibold">{name}</span>

      <FinanceCategoryChip type={type} />
    </div>
  );
};
