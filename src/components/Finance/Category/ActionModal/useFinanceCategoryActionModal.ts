import { useCategoriesQuery } from "@/api/Finance/query";

export const useFinanceCategoryActionModal = () => {
  const { data: categories } = useCategoriesQuery();
  const {
    finance: { categoryId },
  } = useRouter();

  const isEdit = !!categoryId;

  const title = isEdit ? "ویرایش" : "افزودن";

  return {
    categories,
    categoryId,
    isEdit,
    title,
  };
};
