export const FinanceCategoryModal = ({ children }: FragmentProps) => {
  return (
    <Modal>
      <FinanceCategoryDeleteModal />

      <FinanceCategoryActionModal />

      {children}
    </Modal>
  );
};
