import type {
  AddCategoryResponse,
  DeleteCategoryPayload,
  EditCategoryPayload,
  EditCategoryResponse,
} from "@/api/Finance/type";

import { MUTATION_KEYS, QUERY_KEYS } from "@/constants/Finance";

import { createAddUpdater, createDeleteUpdater, createEditUpdater } from "@/api/Finance/helper";

import service from "@/api/Finance/service";

const ADD_CATEGORY_MUTATION_CONFIG = mutationOptions({
  mutationKey: MUTATION_KEYS.ADD_CATEGORY,
  mutationFn: service.addCategory,
});
const EDIT_CATEGORY_MUTATION_CONFIG = mutationOptions({
  mutationKey: MUTATION_KEYS.EDIT_CATEGORY,
  mutationFn: service.editCategory,
});
const DELETE_CATEGORY_MUTATION_CONFIG = mutationOptions({
  mutationKey: MUTATION_KEYS.DELETE_CATEGORY,
  mutationFn: service.deleteCategory,
});

const ADD_TRANSACTION_MUTATION_CONFIG = mutationOptions({
  mutationKey: MUTATION_KEYS.ADD_TRANSACTION,
  mutationFn: service.addTransaction,
});
const EDIT_TRANSACTION_MUTATION_CONFIG = mutationOptions({
  mutationKey: MUTATION_KEYS.EDIT_TRANSACTION,
  mutationFn: service.editTransaction,
});
const DELETE_TRANSACTION_MUTATION_CONFIG = mutationOptions({
  mutationKey: MUTATION_KEYS.DELETE_TRANSACTION,
  mutationFn: service.deleteTransaction,
});

export const useAddCategoryMutation = () => {
  const queryClient = useQueryClient();

  const onSuccess = ({ category }: AddCategoryResponse) =>
    queryClient.setQueryData(QUERY_KEYS.GET_CATEGORIES, createAddUpdater(category));

  const mutation = useMutation({ onSuccess, ...ADD_CATEGORY_MUTATION_CONFIG });

  return mutation;
};

export const useEditCategoryMutation = () => {
  const queryClient = useQueryClient();

  const onSuccess = ({ category }: EditCategoryResponse, { id }: EditCategoryPayload) =>
    queryClient.setQueryData(QUERY_KEYS.GET_CATEGORIES, createEditUpdater({ item: category, id }));

  const mutation = useMutation({ onSuccess, ...EDIT_CATEGORY_MUTATION_CONFIG });

  return mutation;
};

export const useDeleteCategoryMutation = () => {
  const queryClient = useQueryClient();

  const onSuccess = (_: unknown, id: DeleteCategoryPayload) =>
    queryClient.setQueryData(QUERY_KEYS.GET_CATEGORIES, createDeleteUpdater(id));

  const mutation = useMutation({ onSuccess, ...DELETE_CATEGORY_MUTATION_CONFIG });

  return mutation;
};

const useOnTransactionSuccess = () => {
  const queryClient = useQueryClient();

  const onSuccess = () =>
    queryClient.invalidateQueries({
      queryKey: QUERY_KEYS.GET_TRANSACTIONS,
    });

  return onSuccess;
};

export const useAddTransactionMutation = () => {
  const onSuccess = useOnTransactionSuccess();

  const mutation = useMutation({ onSuccess, ...ADD_TRANSACTION_MUTATION_CONFIG });

  return mutation;
};

export const useEditTransactionMutation = () => {
  const onSuccess = useOnTransactionSuccess();

  const mutation = useMutation({ onSuccess, ...EDIT_TRANSACTION_MUTATION_CONFIG });

  return mutation;
};

export const useDeleteTransactionMutation = () => {
  const onSuccess = useOnTransactionSuccess();

  const mutation = useMutation({ onSuccess, ...DELETE_TRANSACTION_MUTATION_CONFIG });

  return mutation;
};
