import type { Transaction } from "@/types/Finance";

import { useAddTransactionMutation, useEditTransactionMutation } from "@/api/Finance/mutation";
import { useCategoriesQuery } from "@/api/Finance/query";

export type FinanceTransactionFormValues = Pick<Transaction, "amount" | "date" | "note">;

const DEFAULT_FORM_VALUES: FinanceTransactionFormValues = {
  amount: 0,
  date: "",
  note: "",
};

const FIELD_RULES = {
  validate: {
    required: validateRequired,
  },
};

const amountField = {
  name: "amount",
  props: {
    label: "مقدار",
    type: "number",
  },
  rules: FIELD_RULES,
} as const;
const noteField = {
  name: "note",
  props: {
    label: "توضیحات",
    textarea: true,
  },
  rules: FIELD_RULES,
} as const;

export const useFinanceTransactionActionModalContent = ({ onClose }: IFinanceActionModalContent) => {
  const { transactions, transactionId, isEdit, title } = useFinanceTransactionActionModal();
  const { data: categories } = useCategoriesQuery();

  const addMutation = useAddTransactionMutation();
  const editMutation = useEditTransactionMutation();

  const selectedTransaction = findByKey(transactions, transactionId);

  const [date, setDate] = useState(() => selectedTransaction?.date ?? "");
  const [categoryId, setCategoryId] = useState(() => selectedTransaction?.category.id ?? categories[0]?.id);

  const formValues = isEdit ? selectedTransaction : DEFAULT_FORM_VALUES;

  const {
    formState: { errors, isSubmitting },
    register,
    handleSubmit,
  } = useForm<FinanceTransactionFormValues>({
    values: formValues,
  });

  const dateField = {
    name: "date",
    props: {
      label: "تاریخ",
      date,
      onDateChange: setDate,
    },
    rules: FIELD_RULES,
  } as const;
  const categoryField = {
    props: {
      value: categoryId,
      onChange: setCategoryId,
    },
  };

  const fields = {
    amount: amountField,
    note: noteField,
    date: dateField,
    category: categoryField,
  };

  const mutateByMode = ({ amount, note }: FinanceTransactionFormValues) => {
    const options = { onSuccess: onClose };
    const fieldValues = { amount: +amount, date, note, categoryId };

    if (isEdit) {
      editMutation.mutate({ id: transactionId, ...fieldValues }, options);

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
