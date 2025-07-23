import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

interface IFinanceReportStatisticsIcon {
  positive?: boolean;
}

export const FinanceReportStatisticsIcon = ({ positive }: IFinanceReportStatisticsIcon) => {
  if (positive) return <AiFillCaretUp className="text-success-500" />;

  return <AiFillCaretDown className="text-error-500" />;
};
