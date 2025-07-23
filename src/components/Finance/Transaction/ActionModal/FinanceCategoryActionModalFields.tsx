type FinanceTransactionActionModalFields = Omit<
  ReturnType<typeof useFinanceTransactionActionModalContent>,
  "onSubmit" | "title"
>;

export const FinanceTransactionActionModalFields = ({
  errors,
  fields,
  isSubmitting,
  register,
}: FinanceTransactionActionModalFields) => {
  const { amount: amountField, note: noteField, date: dateField, category: categoryField } = fields;
  const baseFields = [amountField, noteField];

  return (
    <>
      <FinanceCategorySelect disabled={isSubmitting} {...categoryField.props} />

      <DateField
        disabled={isSubmitting}
        errorMessage={errors[dateField.name]?.message as string}
        {...register(dateField.name, dateField.rules)}
        {...dateField.props}
      />

      {baseFields.map(({ name, rules, props }) => (
        <TextField
          key={name}
          disabled={isSubmitting}
          errorMessage={errors[name]?.message as string}
          {...register(name, rules)}
          {...props}
        />
      ))}
    </>
  );
};
