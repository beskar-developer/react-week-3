export const FinanceReportStatisticsCard = () => {
  const { infoList } = useFinanceReportStatisticsCard();

  return (
    <Card className="flex justify-between p-6 md:justify-around">
      {infoList.map((info) => (
        <FinanceReportStatisticsInfo key={info.label} {...info} />
      ))}
    </Card>
  );
};
