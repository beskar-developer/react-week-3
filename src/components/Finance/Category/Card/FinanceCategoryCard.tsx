import type { Category } from "@/types/Finance";

export const FinanceCategoryCard = ({ id, type, name }: Category) => {
  const { onAction } = useFinanceCategoryCard();

  return <FinanceCard id={id} categoryName={name} categoryType={type} onAction={onAction} />;
};
