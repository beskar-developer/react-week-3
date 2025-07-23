export const FinanceReportContent = () => {
  return (
    <div className="flex h-full flex-col gap-6 overflow-auto pb-4">
      <FinanceReportStatistics />

      <FinanceReportCharts />
    </div>
  );
};
