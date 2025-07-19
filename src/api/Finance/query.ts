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
