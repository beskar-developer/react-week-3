import type {
  AddCategoryResponse,
  Category,
  DeleteCategoryPayload,
  EditCategoryPayload,
  EditCategoryResponse,
} from "@/api/Finance/type";

import { MUTATION_KEYS, QUERY_KEYS } from "@/constants/Finance";

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

const createAddCategoryUpdater = (category: Category) => (categories: Category[]) => [
  ...categories,
  category,
];

const createEditCategoryUpdater =
  ({ category, id }: { category: Category; id: Category["id"] }) =>
  (categories: Category[]) => {
    const categoryIndex = findByKey(categories, id, { index: true });

    categories[categoryIndex] = category;

    return categories;
  };

const createDeleteCategoryUpdater = (id: DeleteCategoryPayload) => (categories: Category[]) =>
  categories.filter((category) => category.id !== id);

export const useAddCategoryMutation = () => {
  const queryClient = useQueryClient();

  const onSuccess = ({ category }: AddCategoryResponse) =>
    queryClient.setQueryData(QUERY_KEYS.GET_CATEGORIES, createAddCategoryUpdater(category));

  const mutation = useMutation({ onSuccess, ...ADD_CATEGORY_MUTATION_CONFIG });

  return mutation;
};

export const useEditCategoryMutation = () => {
  const queryClient = useQueryClient();

  const onSuccess = ({ category }: EditCategoryResponse, { id }: EditCategoryPayload) =>
    queryClient.setQueryData(QUERY_KEYS.GET_CATEGORIES, createEditCategoryUpdater({ category, id }));

  const mutation = useMutation({ onSuccess, ...EDIT_CATEGORY_MUTATION_CONFIG });

  return mutation;
};

export const useDeleteCategoryMutation = () => {
  const queryClient = useQueryClient();

  const onSuccess = (_: unknown, id: DeleteCategoryPayload) =>
    queryClient.setQueryData(QUERY_KEYS.GET_CATEGORIES, createDeleteCategoryUpdater(id));

  const mutation = useMutation({ onSuccess, ...DELETE_CATEGORY_MUTATION_CONFIG });

  return mutation;
};
