export const FinanceCategoryDeleteModal = () => {
  const { isPending, onDelete } = useFinanceCategoryDeleteModal();

  return <DeleteModal label="دسته بندی" isPending={isPending} onDelete={onDelete} />;
};
