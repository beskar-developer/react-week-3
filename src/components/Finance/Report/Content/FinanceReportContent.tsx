import { useTransactionReportQuery } from "@/api/Finance/query";

export const FinanceReportContent = () => {
  const { isFetching } = useTransactionReportQuery();

  return (
    <div className={twMerge("flex h-full flex-col gap-6 overflow-auto pb-4", isFetching && "justify-center")}>
      <LoadingContainer message="در حال دریافت گزارشات..." loading={isFetching}>
        <FinanceReportStatistics />

        <FinanceReportCharts />
      </LoadingContainer>
    </div>
  );
};
