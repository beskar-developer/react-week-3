import { useTransactionReportQuery } from "@/api/Finance/query";

export const useFinanceReportStatisticsCard = () => {
  const { data: report } = useTransactionReportQuery();

  const infoList = [
    {
      label: "درآمد",
      amount: report?.totalIncome,
    },
    {
      label: "هزینه",
      amount: report?.totalExpense,
      positive: false,
    },
    {
      label: "تراز مالی",
      amount: report?.balance,
    },
  ];

  return { infoList };
};
