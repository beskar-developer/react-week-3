export const FinanceCardCategoryInfo = ({
  categoryName,
  categoryType,
}: Pick<IFinanceCard, "categoryName" | "categoryType">) => {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm font-semibold">{categoryName}</span>

      <FinanceCategoryChip type={categoryType} />
    </div>
  );
};
