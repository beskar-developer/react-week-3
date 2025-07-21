export const useDeleteModalAction = ({ onDelete, isPending, onClose }: Omit<IDeleteModal, "label">) => {
  const actions = [
    {
      name: "DELETE",
      children: "حذف",
      color: "error",
      loading: isPending,
      onClick: () => onDelete(onClose),
    },
    {
      name: "CANCEL",
      children: "انصراف",
      variant: "outlined",
      onClick: onClose,
    },
  ] as const;

  return { actions };
};
