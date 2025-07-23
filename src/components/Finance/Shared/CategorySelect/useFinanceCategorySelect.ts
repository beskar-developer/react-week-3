import type { Category } from "@/types/Finance";

import { useCategoriesQuery } from "@/api/Finance/query";

export const useFinanceCategorySelect = ({ value, onChange }: IFinanceCategorySelect) => {
  const { data: categories, isFetching } = useCategoriesQuery();

  const getCategoryTypeById = (id: Category["id"]) => findByKey(categories, id)!.type;

  const options = categories.map(({ name, id }) => ({
    value: id,
    label: name,
  })) as FinanceCategorySelectOption[];

  const field = {
    label: "دسته بندی",
    name: "category",
    options,
    disabled: isFetching,
    value,
    onChange,
  };

  return { field, getCategoryTypeById };
};
