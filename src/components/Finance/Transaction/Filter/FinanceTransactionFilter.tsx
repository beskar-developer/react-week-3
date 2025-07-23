export const FinanceTransactionFilter = () => {
  return (
    <div className="grid grid-cols-[1fr_1fr_auto] items-end gap-4 px-4">
      <FinanceTransactionFilterSelect />

      <FinanceTransactionFilterDate />

      <FilterTransactionResetButton />
    </div>
  );
};
