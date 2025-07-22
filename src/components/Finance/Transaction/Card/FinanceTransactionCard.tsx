import type { Transaction } from "@/types/Finance";

export const FinanceTransactionCard = ({ id, amount, note, date, category }: Transaction) => {
  const { onAction } = useFinanceTransactionCard();

  return (
    <FinanceCard
      id={id}
      amount={amount}
      note={note}
      date={date}
      categoryName={category.name}
      categoryType={category.type}
      onAction={onAction}
    />
  );
};
