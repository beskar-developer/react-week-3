import type { Category, Transaction } from "@/types/Finance";

import { useCategoriesQuery, useTransactionReportQuery } from "@/api/Finance/query";

type CellEntry = {
  value: Transaction["amount"];
};

export const useFinanceReportPieChart = () => {
  const { data: report } = useTransactionReportQuery();
  const { data: categories } = useCategoriesQuery();
  const { colorMap } = useFinanceReportColor();

  const convertReportToCellEntry = ([categoryId, amount]: [Category["id"], Transaction["amount"]]) => ({
    name: findByKey(categories, categoryId)?.name,
    categoryId,
    value: amount,
  });
  const isPositiveEntry = ({ value }: CellEntry) => value > 0;

  const generateData = () =>
    Object.entries(report.byCategory).map(convertReportToCellEntry).filter(isPositiveEntry);

  const data = generateData();

  return {
    data,
    colorMap,
  };
};
