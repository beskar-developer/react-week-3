import { AiOutlineTransaction } from "react-icons/ai";

export const FinanceTransactionHeader = () => {
  const { onAdd } = useFinanceTransactionHeader();

  return <FinanceHeader label="تراکنش ها" Icon={AiOutlineTransaction} onAdd={onAdd} />;
};
