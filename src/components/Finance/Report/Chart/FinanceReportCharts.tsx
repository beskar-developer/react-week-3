export const FinanceReportCharts = () => {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 lg:grid-cols-[1fr_1.5fr]">
      <FinanceReportPieChart />

      <FinanceReportBarChart />
    </div>
  );
};
