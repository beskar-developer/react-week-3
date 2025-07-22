import { AiFillFolder } from "react-icons/ai";

export const FinanceCategoryHeader = () => {
  const { onAdd } = useFinanceCategoryHeader();

  return <FinanceHeader label="دسته بندی ها" Icon={AiFillFolder} onAdd={onAdd} />;
};
