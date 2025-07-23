export const FinanceTransactionActionModalContent = ({ onClose }: IFinanceActionModalContent) => {
  const { fields, title, isSubmitting, errors, register, onSubmit } = useFinanceTransactionActionModalContent(
    {
      onClose,
    },
  );

  return (
    <form className="flex flex-col gap-8 px-4" onSubmit={onSubmit}>
      <FinanceTransactionActionModalFields
        fields={fields}
        errors={errors}
        isSubmitting={isSubmitting}
        register={register}
      />

      <FinanceActionModalButton label={title} isSubmitting={isSubmitting} onClose={onClose} />
    </form>
  );
};
