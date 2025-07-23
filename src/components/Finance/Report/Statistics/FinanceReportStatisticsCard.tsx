export const FinanceReportStatisticsCard = () => {
  const { infoList } = useFinanceReportStatisticsCard();

  return (
    <Card className="flex justify-around p-6">
      {infoList.map((info) => (
        <FinanceReportStatisticsInfo {...info} />
      ))}
    </Card>
  );
};
