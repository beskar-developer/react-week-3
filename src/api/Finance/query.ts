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
