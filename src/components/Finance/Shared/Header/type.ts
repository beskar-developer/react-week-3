import type { IconType } from "react-icons/lib";

export interface IFinanceHeader {
  Icon: IconType;
  label: string;
  onAdd?: () => void;
}

export interface IFinanceHeaderAction {
  onOpen: () => void;
  onAdd?: IFinanceHeader["onAdd"];
}
