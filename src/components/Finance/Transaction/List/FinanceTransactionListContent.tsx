import { itemAnimationConfig } from "@shared-vendor/constants";
import { useTransactionsQuery } from "@/api/Finance/query";

export const FinanceTransactionListContent = () => {
  const { data: transactions } = useTransactionsQuery();

  return (
    <motion.ul className="grid h-full grid-cols-1 content-start gap-4 overflow-auto overflow-x-hidden pr-6 pl-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {transactions.map((transaction) => (
        <motion.li key={transaction.id} {...itemAnimationConfig}>
          <FinanceTransactionCard {...transaction} />
        </motion.li>
      ))}
    </motion.ul>
  );
};
