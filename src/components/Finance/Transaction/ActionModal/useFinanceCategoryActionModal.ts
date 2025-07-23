import { useTransactionsQuery } from "@/api/Finance/query";

export const useFinanceTransactionActionModal = () => {
  const { data: transactions } = useTransactionsQuery();
  const {
    finance: { transactionId },
  } = useRouter();

  const isEdit = !!transactionId;

  const title = isEdit ? "ویرایش" : "افزودن";

  return {
    transactions,
    transactionId,
    isEdit,
    title,
  };
};
