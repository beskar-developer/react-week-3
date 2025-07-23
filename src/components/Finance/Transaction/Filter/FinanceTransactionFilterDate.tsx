export const FinanceTransactionFilterDate = () => {
  const {
    finance: { date, setDate },
  } = useRouter();

  return (
    <DateField
      fieldClassName="bg-primary-100"
      value={date}
      onChange={setDate}
      name="dateRange"
      label="بازه زمانی"
      range
    />
  );
};
