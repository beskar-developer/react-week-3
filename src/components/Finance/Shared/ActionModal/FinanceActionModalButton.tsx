export const FinanceActionModalButton = ({ label, isSubmitting, onClose }: IFinanceActionModalButton) => {
  const { actions } = useFinanceActionModalButton({
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
