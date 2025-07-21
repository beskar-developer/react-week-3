export const DeleteModalAction = ({ isPending, onClose, onDelete }: Omit<IDeleteModal, "label">) => {
  const { actions } = useDeleteModalAction({ isPending, onClose, onDelete });

  return (
    <div className="flex gap-4">
      {actions.map((action) => (
        <BaseButton className="w-32" key={action.name} {...action} />
      ))}
    </div>
  );
};
