export const FinanceCategoryActionModalContent = ({ onClose }: IFinanceCategoryActionModalContent) => {
  const { fields, title, isSubmitting, errors, register, onSubmit } = useFinanceCategoryActionModalContent({
    onClose,
  });

  return (
    <form className="flex flex-col gap-8 px-4" onSubmit={onSubmit}>
      <FinanceCategoryActionModalFields
        fields={fields}
        errors={errors}
        isSubmitting={isSubmitting}
        register={register}
      />

      <FinanceCategoryActionModalButton label={title} isSubmitting={isSubmitting} onClose={onClose} />
    </form>
  );
};
