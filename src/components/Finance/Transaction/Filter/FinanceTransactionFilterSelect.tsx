export const FinanceTransactionFilterSelect = () => {
  const { field } = useFinanceTransactionFilterSelect();

  return <FinanceCategorySelect {...field} />;
};
