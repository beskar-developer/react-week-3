import { defineQuery } from "@shared-vendor/helpers";
import service from "@/api/Finance/service";

export const useCategoriesQuery = () => {
  const endPoints = useEndPoints();

  const queryConfig = defineQuery({
    queryKey: endPoints.finance.getCategories(),
    queryFn: service.getCategories,
    initialData: [],
  });

  const query = useQuery(queryConfig);

  return query;
};

export const useTransactionsQuery = () => {
  const {
    finance: { startDate, endDate, categoryId },
  } = useRouter();

  const endPoints = useEndPoints();

  const queryConfig = defineQuery({
    queryKey: endPoints.finance.getTransactions({
      startDate,
      endDate,
      categoryId,
    }),
    queryFn: ({ signal }) => service.getTransactions({ startDate, endDate, categoryId }, signal),
    initialData: [],
  });

  const query = useQuery(queryConfig);

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
  const {
    finance: { startDate, endDate },
  } = useRouter();
  const endPoints = useEndPoints();

  const queryConfig = defineQuery({
    queryKey: endPoints.finance.getTransactionReport({ startDate, endDate }),
    queryFn: () => service.getTransactionReport({ startDate, endDate }),
    initialData: TRANSACTION_REPORT_QUERY_INITIAL_DATA,
  });

  const query = useQuery(queryConfig);

  return query;
};
