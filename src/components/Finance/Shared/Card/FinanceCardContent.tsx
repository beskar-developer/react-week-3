type FinanceCardContent = Pick<IFinanceCard, "amount" | "categoryName" | "categoryType" | "note" | "date">;

export const FinanceCardContent = ({
  categoryName,
  categoryType,
  amount,
  date,
  note,
}: FinanceCardContent) => {
  return (
    <>
      <FinanceCardTransactionInfo amount={amount} date={date} note={note} />

      <FinanceCardCategoryInfo categoryName={categoryName} categoryType={categoryType} />
    </>
  );
};
