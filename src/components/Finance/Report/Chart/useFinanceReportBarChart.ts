import type { Transaction, TransactionReport } from "@/types/Finance";

import { FULL_DATE_FORMAT } from "@shared-vendor/constants";

import { format } from "date-fns-jalali";

import { useCategoriesQuery, useTransactionReportQuery } from "@/api/Finance/query";

export const useFinanceReportBarChart = () => {
  const { data: report } = useTransactionReportQuery();
  const { data: categories } = useCategoriesQuery();
  const { colorMap } = useFinanceReportColor();

  const convertCategoryReportToBarEntry = (byCategory: TransactionReport["byCategory"]) =>
    Object.entries(byCategory).reduce((acc, [categoryId, amount]) => {
      const category = findByKey(categories, categoryId)!;
      const isIncome = category.type === "INCOME";

      const negatedAmount = isIncome ? amount : -amount;

      return {
        ...acc,
        [category.name]: negatedAmount,
      };
    }, {});

  const convertDayReportToBarEntry = ([date, byCategory]: [
    Transaction["date"],
    TransactionReport["byCategory"],
  ]) => ({
    name: format(date, FULL_DATE_FORMAT),
    ...convertCategoryReportToBarEntry(byCategory),
  });

  const generateData = () => Object.entries(report.byDay).map(convertDayReportToBarEntry);

  const generateBars = () =>
    categories.map(({ id, name }) => ({
      dataKey: name,
      fill: colorMap[id],
    }));

  const data = generateData();
  const bars = generateBars();

  return { data, bars };
};
