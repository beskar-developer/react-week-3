type FinanceCategoryActionModalFields = Omit<
  ReturnType<typeof useFinanceCategoryActionModalContent>,
  "onSubmit" | "title"
>;

export const FinanceCategoryActionModalFields = ({
  errors,
  fields,
  isSubmitting,
  register,
}: FinanceCategoryActionModalFields) => {
  const { name: nameField, type: typeField } = fields;

  return (
    <>
      <TextField
        disabled={isSubmitting}
        errorMessage={errors[nameField.name]?.message as string}
        {...register(nameField.name, nameField.rules)}
        {...nameField.props}
      />

      <Select disabled={isSubmitting} {...typeField.props} />
    </>
  );
};
