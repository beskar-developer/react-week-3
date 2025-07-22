import { FULL_DATE_FORMAT } from "@shared-vendor/constants";
import { format } from "date-fns-jalali";

export const FinanceCardDate = ({ date }: Pick<IFinanceCard, "date">) => {
  if (!date) return <></>;

  return <span className="text-primary-700 dark:text-primary-100">{format(date, FULL_DATE_FORMAT)}</span>;
};
