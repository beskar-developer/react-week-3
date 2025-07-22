export const useFinanceCategoryActionModalButton = ({
  label,
  isSubmitting,
  onClose,
}: IFinanceCategoryActionModalButton) => {
  const actions = [
    {
      name: "ADD",
      children: label,
      type: "submit",
      loading: isSubmitting,
    },
    {
      name: "CANCEL",
      variant: "outlined",
      children: "انصراف",
      type: "button",
      onClick: onClose,
    },
  ] as const;

  return { actions };
};
