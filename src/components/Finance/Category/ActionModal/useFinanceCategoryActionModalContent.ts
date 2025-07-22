import type { Category } from "@/types/Finance";

import { CATEGORY_TYPE_OPTIONS } from "@/constants/Finance";

import { useAddCategoryMutation, useEditCategoryMutation } from "@/api/Finance/mutation";

const DEFAULT_FORM_VALUES: FinanceCategoryFormValues = {
  name: "",
};
const DEFAULT_TYPE = CATEGORY_TYPE_OPTIONS[0].value;

const nameField = {
  name: "name",
  props: {
    label: "نام",
  },
  rules: {
    validate: {
      required: validateRequired,
      minLength: (value: string) => validateMinLength(value, 3),
    },
  },
} as const;

export const useFinanceCategoryActionModalContent = ({ onClose }: IFinanceCategoryActionModalContent) => {
  const { categories, categoryId, isEdit, title } = useFinanceCategoryActionModal();

  const addMutation = useAddCategoryMutation();
  const editMutation = useEditCategoryMutation();

  const selectedCategory = findByKey(categories, categoryId)!;

  const [type, setType] = useState<Category["type"]>(() => selectedCategory?.type ?? DEFAULT_TYPE);

  const fields = {
    name: nameField,
    type: {
      props: {
        name: "type",
        label: "نوع",
        value: type,
        onChange: setType,
        options: CATEGORY_TYPE_OPTIONS,
      },
    },
  };

  const formValues = isEdit ? selectedCategory : DEFAULT_FORM_VALUES;

  const {
    formState: { errors, isSubmitting },
    register,
    handleSubmit,
  } = useForm<FinanceCategoryFormValues>({
    values: formValues,
  });

  const mutateByMode = ({ name }: FinanceCategoryFormValues) => {
    const options = { onSuccess: onClose };
    const fieldValues = { name, type };

    if (isEdit) {
      editMutation.mutate({ id: categoryId, ...fieldValues }, options);

      return;
    }

    addMutation.mutate(fieldValues, options);
  };

  const onSubmit = handleSubmit(mutateByMode);

  return {
    fields,
    title,
    isSubmitting,
    errors,
    register,
    onSubmit,
  };
};
