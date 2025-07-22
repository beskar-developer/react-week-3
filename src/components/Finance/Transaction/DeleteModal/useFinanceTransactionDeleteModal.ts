import type { IDeleteModal } from "@/components/Shared/DeleteModal/type";

import { useDeleteTransactionMutation } from "@/api/Finance/mutation";

export const useFinanceTransactionDeleteModal = () => {
  const { mutate, isPending } = useDeleteTransactionMutation();
  const {
    finance: { transactionId },
  } = useRouter();

  const onDelete = (onClose: IDeleteModal["onClose"]) => mutate(transactionId, { onSuccess: onClose });

  return { isPending, onDelete };
};
