import { endOfToday, startOfToday } from "date-fns-jalali";

export const useFinanceReportFilterToday = () => {
  const {
    finance: { setStartDate, setEndDate },
  } = useRouter();

  const convertISOToDate = (ISODate: string) => ISODate.slice(0, 10);

  const setToday = () => {
    setStartDate(convertISOToDate(startOfToday().toISOString()));

    setEndDate(convertISOToDate(endOfToday().toISOString()));
  };

  return { setToday };
};
