const FinanceTransaction = () => {
  return (
    <div className="flex h-full flex-col gap-8">
      <FinanceTransactionModal>
        <FinanceTransactionHeader />

        <FinanceTransactionFilter />

        <FinanceTransactionList />
      </FinanceTransactionModal>
    </div>
  );
};

export default FinanceTransaction;
