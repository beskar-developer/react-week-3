export const FinanceTransactionModal = ({ children }: FragmentProps) => {
  return (
    <Modal>
      <FinanceTransactionDeleteModal />

      {children}
    </Modal>
  );
};
