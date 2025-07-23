export const FinanceReportFilterToday = () => {
  const { setToday } = useFinanceReportFilterToday();

  return (
    <BaseButton className="w-16" color="success" onClick={setToday}>
      امروز
    </BaseButton>
  );
};
