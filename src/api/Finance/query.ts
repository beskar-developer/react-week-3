import { QUERY_KEYS } from "@/constants/Finance";

import service from "@/api/Finance/service";

export const useCategoriesQuery = () => {
  const query = useQuery({
    queryKey: QUERY_KEYS.GET_CATEGORIES,
    queryFn: service.getCategories,
    initialData: [],
    initialDataUpdatedAt: 0,
  });

  return query;
};

export const useTransactionsQuery = () => {
  const { startDate, endDate, categoryId } = useFinanceTransactionSearchParams();

  const query = useQuery({
    queryKey: [...QUERY_KEYS.GET_TRANSACTIONS, startDate, endDate, categoryId],
    queryFn: () => service.getTransactions({ startDate, endDate, categoryId }),
    initialData: [],
    initialDataUpdatedAt: 0,
  });

  return query;
};

const TRANSACTION_REPORT_QUERY_INITIAL_DATA = {
  totalIncome: 0,
  totalExpense: 0,
  balance: 0,
  byCategory: {},
  byDay: {},
};

export const useTransactionReportQuery = () => {
  const { startDate, endDate } = useFinanceTransactionSearchParams();

  const query = useQuery({
    queryKey: [...QUERY_KEYS.GET_TRANSACTION_REPORT, startDate, endDate],
    queryFn: () => service.getTransactionReport({ startDate, endDate }),
    initialData: TRANSACTION_REPORT_QUERY_INITIAL_DATA,
    initialDataUpdatedAt: 0,
  });

  return query;
};
