const FinanceReport = () => {
  return (
    <div className="flex h-full flex-col gap-8">
      <FinanceReportHeader />

      <FinanceReportFilter />

      <FinanceReportStatistics />
    </div>
  );
};

export default FinanceReport;
