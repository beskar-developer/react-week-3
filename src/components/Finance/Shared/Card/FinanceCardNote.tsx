import { AiFillBook } from "react-icons/ai";

export const FinanceCardNote = ({ note }: Pick<IFinanceCard, "note">) => {
  return (
    <div className="flex gap-2">
      <AiFillBook className="mt-2 shrink-0" />

      <p className="p-2 text-[10px] text-gray-700 dark:text-gray-300">{note}</p>
    </div>
  );
};
