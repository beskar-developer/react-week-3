export const useFinanceReportStatisticsAmount = ({
  amount,
  positive,
}: Pick<IFinanceReportStatisticsInfo, "amount" | "positive">) => {
  const isAmountNonNegative = amount >= 0;

  const positiveAmount = isAmountNonNegative ? amount : -amount;

  const formattedAmount = convertNumberToLocaleString(positiveAmount);
  const isPositive = positive && isAmountNonNegative;

  return {
    formattedAmount,
    isPositive,
  };
};
