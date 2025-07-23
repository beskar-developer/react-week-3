export const FinanceReportFilter = () => {
  return (
    <div className="grid grid-cols-[1fr_auto] items-end gap-4 px-4">
      <FinanceFilterDate />

      <FinanceFilterResetButton />
    </div>
  );
};
