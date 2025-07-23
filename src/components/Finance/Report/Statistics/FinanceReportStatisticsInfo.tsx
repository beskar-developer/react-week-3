export const FinanceReportStatisticsInfo = ({ amount, positive, label }: IFinanceReportStatisticsInfo) => {
  return (
    <div className="flex items-center gap-4">
      <span className="text-surface-500 dark:text-surface-200 text-xs font-semibold">{label}:</span>

      <FinanceReportStatisticsAmount amount={amount} positive={positive} />
    </div>
  );
};
