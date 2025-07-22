export const FinanceCategoryActionModalButton = ({
  label,
  isSubmitting,
  onClose,
}: IFinanceCategoryActionModalButton) => {
  const { actions } = useFinanceCategoryActionModalButton({
    label,
    isSubmitting,
    onClose,
  });

  return (
    <div className="flex gap-4">
      {actions.map((action) => (
        <BaseButton className="w-32" key={action.name} {...action} />
      ))}
    </div>
  );
};
