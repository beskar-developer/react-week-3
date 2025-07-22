import { useTransactionsQuery } from "@/api/Finance/query";

export const FinanceTransactionList = () => {
  const { isFetching, data: transactions } = useTransactionsQuery();

  return (
    <div className="h-full overflow-hidden">
      <LoadingContainer className="h-full" message="در حال دریافت تراکنش ها..." loading={isFetching}>
        <NotFoundContainer message="تراکنشی یافت نشد" itemCount={transactions.length}>
          <FinanceTransactionListContent />
        </NotFoundContainer>
      </LoadingContainer>
    </div>
  );
};
