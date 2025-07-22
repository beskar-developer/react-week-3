const FinanceTransaction = () => {
  return (
    <div className="flex h-full flex-col gap-8">
      <FinanceTransactionModal>
        <FinanceTransactionHeader />

        <FinanceTransactionList />
      </FinanceTransactionModal>
    </div>
  );
};

export default FinanceTransaction;
