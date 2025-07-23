export const FinanceFilterDate = () => {
  const {
    finance: { date, setDate },
  } = useRouter();

  return (
    <DateField
      fieldClassName="bg-primary-100"
      date={date}
      onDateChange={setDate}
      name="dateRange"
      label="بازه زمانی"
      range
    />
  );
};
