import type { Category } from "@/types/Finance";

type Open = () => void;

export const useFinanceCategoryCardAction = ({ id }: Pick<Category, "id">) => {
  const {
    finance: { setCategoryId },
  } = useRouter();

  const createOnClick = (open: Open) => () => {
    setCategoryId(id);

    open();
  };

  return { createOnClick };
};
