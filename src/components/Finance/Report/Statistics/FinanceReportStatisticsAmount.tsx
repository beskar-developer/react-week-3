export const FinanceReportStatisticsAmount = ({
  amount,
  positive = true,
}: Pick<IFinanceReportStatisticsInfo, "amount" | "positive">) => {
  const { formattedAmount, isPositive } = useFinanceReportStatisticsAmount({ amount, positive });

  return (
    <div className="flex items-center gap-1">
      <span className="font-bold" dir="ltr">
        {formattedAmount}
      </span>

      <FinanceReportStatisticsIcon positive={isPositive} />
    </div>
  );
};
