import { AiFillFolder } from "react-icons/ai";

export const FinanceCategoryHeaderContent = () => {
  return (
    <h1 className="flex items-center gap-2 text-xl font-black">
      <AiFillFolder className="text-primary-500 dark:text-primary-300 size-8" />

      <span>دسته بندی ها</span>
    </h1>
  );
};
