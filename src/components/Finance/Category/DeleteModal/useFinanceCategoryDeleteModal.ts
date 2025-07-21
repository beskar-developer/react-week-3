import { useDeleteCategoryMutation } from "@/api/Finance/mutation";
import type { IDeleteModal } from "@/components/Shared/DeleteModal/type";

export const useFinanceCategoryDeleteModal = () => {
  const { mutate, isPending } = useDeleteCategoryMutation();
  const {
    finance: { categoryId },
  } = useRouter();

  const onDelete = (onClose: IDeleteModal["onClose"]) => mutate(categoryId, { onSuccess: onClose });

  return { isPending, onDelete };
};
