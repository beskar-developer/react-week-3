export const FinanceCard = ({
  id,
  categoryType,
  categoryName,
  amount,
  note,
  date,
  onAction,
}: IFinanceCard) => {
  return (
    <Card className="flex h-full flex-col gap-2 px-3 pt-4 pb-2">
      <FinanceCardContent
        categoryName={categoryName}
        categoryType={categoryType}
        amount={amount}
        note={note}
        date={date}
      />

      <FinanceCardAction id={id} onAction={onAction} />
    </Card>
  );
};
