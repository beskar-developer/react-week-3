import type { Category, Transaction } from "@/types/Finance";

type Id = Category["id"] | Transaction["id"];

export interface IFinanceCard {
  id: Id;
  categoryName: Category["name"];
  categoryType: Category["type"];
  amount?: Transaction["amount"];
  note?: Transaction["note"];
  date?: Transaction["date"];
  onAction: (id: Id) => void;
}

export type IFinanceCardAction = Pick<IFinanceCard, "id" | "onAction">;
