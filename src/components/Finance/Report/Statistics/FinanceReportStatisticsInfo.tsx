export const FinanceReportStatisticsInfo = ({ amount, positive, label }: IFinanceReportStatisticsInfo) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center">
      <span className="text-surface-500 dark:text-surface-200 text-xs font-semibold">{label}:</span>

      <FinanceReportStatisticsAmount amount={amount} positive={positive} />
    </div>
  );
};
