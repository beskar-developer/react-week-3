export const FinanceCardAmount = ({ amount }: Pick<IFinanceCard, "amount">) => {
  return (
    <span className="text-surface-700 dark:text-surface-300 font-black">
      {convertNumberToLocaleString(amount)}
    </span>
  );
};
