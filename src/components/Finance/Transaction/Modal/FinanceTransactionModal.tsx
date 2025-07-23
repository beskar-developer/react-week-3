export const FinanceTransactionModal = ({ children }: FragmentProps) => {
  return (
    <Modal>
      <FinanceTransactionDeleteModal />

      <FinanceTransactionActionModal />

      {children}
    </Modal>
  );
};
