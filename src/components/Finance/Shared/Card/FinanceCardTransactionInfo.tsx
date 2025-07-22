export const FinanceCardTransactionInfo = ({
  amount,
  date,
  note,
}: Pick<IFinanceCard, "amount" | "date" | "note">) => {
  if (!amount) return <></>;

  return (
    <>
      <FinanceCardNote note={note} />

      <div className="flex items-center justify-between text-sm">
        <FinanceCardAmount amount={amount} />

        <FinanceCardDate date={date} />
      </div>
    </>
  );
};
