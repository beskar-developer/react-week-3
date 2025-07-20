import type {
  AddCategoryResponse,
  DeleteCategoryPayload,
  EditCategoryPayload,
  EditCategoryResponse,
} from "@/types/Finance";

import { createAddUpdater, createDeleteUpdater, createEditUpdater } from "@/api/Finance/helper";

import { defineMutation } from "@shared-vendor/helpers";
import service from "@/api/Finance/service";

export const useAddCategoryMutation = () => {
  const queryClient = useQueryClient();
  const endPoints = useEndPoints();

  const onSuccess = ({ category }: AddCategoryResponse) =>
    queryClient.setQueryData(QUERY_KEYS.GET_CATEGORIES, createAddUpdater(category));

  const mutationConfig = defineMutation({
    mutationKey: endPoints.finance.addCategory(),
    mutationFn: service.addCategory,
    onSuccess,
  });

  const mutation = useMutation(mutationConfig);

  return mutation;
};

export const useEditCategoryMutation = () => {
  const queryClient = useQueryClient();
  const endPoints = useEndPoints();

  const onSuccess = ({ category }: EditCategoryResponse, { id }: EditCategoryPayload) =>
    queryClient.setQueryData(QUERY_KEYS.GET_CATEGORIES, createEditUpdater({ item: category, id }));

  const mutationConfig = defineMutation({
    mutationKey: endPoints.finance.editCategory(),
    mutationFn: service.editCategory,
    onSuccess,
  });

  const mutation = useMutation(mutationConfig);

  return mutation;
};

export const useDeleteCategoryMutation = () => {
  const queryClient = useQueryClient();
  const endPoints = useEndPoints();

  const onSuccess = (_: unknown, id: DeleteCategoryPayload) =>
    queryClient.setQueryData(QUERY_KEYS.GET_CATEGORIES, createDeleteUpdater(id));

  const mutationConfig = defineMutation({
    mutationKey: endPoints.finance.deleteCategory(),
    mutationFn: service.deleteCategory,
    onSuccess,
  });

  const mutation = useMutation(mutationConfig);

  return mutation;
};

const useOnTransactionSuccess = () => {
  const queryClient = useQueryClient();

  const onSuccess = () => {
    queryClient.invalidateQueries({
      predicate: ({ queryKey }) =>
        [...QUERY_KEYS.GET_TRANSACTIONS, ...QUERY_KEYS.GET_TRANSACTION_REPORT].includes(
          queryKey[0] as string,
        ),
      refetchType: "active",
    });
  };

  return onSuccess;
};

export const useAddTransactionMutation = () => {
  const onSuccess = useOnTransactionSuccess();
  const endPoints = useEndPoints();

  const mutationConfig = defineMutation({
    mutationKey: endPoints.finance.addTransaction(),
    mutationFn: service.addTransaction,
    onSuccess,
  });

  const mutation = useMutation(mutationConfig);

  return mutation;
};

export const useEditTransactionMutation = () => {
  const onSuccess = useOnTransactionSuccess();
  const endPoints = useEndPoints();

  const mutationConfig = defineMutation({
    mutationKey: endPoints.finance.editTransaction(),
    mutationFn: service.editTransaction,
    onSuccess,
  });

  const mutation = useMutation(mutationConfig);

  return mutation;
};

export const useDeleteTransactionMutation = () => {
  const onSuccess = useOnTransactionSuccess();
  const endPoints = useEndPoints();

  const mutationConfig = defineMutation({
    mutationKey: endPoints.finance.deleteTransaction(),
    mutationFn: service.deleteTransaction,
    onSuccess,
  });

  const mutation = useMutation(mutationConfig);

  return mutation;
};
