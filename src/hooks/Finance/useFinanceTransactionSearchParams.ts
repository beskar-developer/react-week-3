import { createSetSearchParam } from "@shared-vendor/helpers";

const KEYS = {
  START_DATE: "startDate",
  END_DATE: "endDate",
  CATEGORY_ID: "categoryId",
};
const DEFAULT_VALUE = "";

export const useFinanceTransactionSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const startDate = searchParams.get("startDate") ?? DEFAULT_VALUE;
  const endDate = searchParams.get("endDate") ?? DEFAULT_VALUE;
  const categoryId = searchParams.get("categoryId") ?? DEFAULT_VALUE;

  const setStartDate = createSetSearchParam(setSearchParams, KEYS.START_DATE);
  const setEndDate = createSetSearchParam(setSearchParams, KEYS.END_DATE);
  const setCategoryId = createSetSearchParam(setSearchParams, KEYS.CATEGORY_ID);

  return {
    startDate,
    endDate,
    categoryId,
    setStartDate,
    setEndDate,
    setCategoryId,
  };
};
