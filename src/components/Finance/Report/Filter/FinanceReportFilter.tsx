export const FinanceReportFilter = () => {
  return (
    <div className="grid grid-cols-[1fr_auto_auto] items-end gap-2 px-4">
      <FinanceFilterDate />

      <FinanceReportFilterToday />

      <FinanceFilterResetButton />
    </div>
  );
};
