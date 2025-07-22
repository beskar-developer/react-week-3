export const FinanceTransactionDeleteModal = () => {
  const { isPending, onDelete } = useFinanceTransactionDeleteModal();

  return <DeleteModal label="تراکنش" isPending={isPending} onDelete={onDelete} />;
};
