export const FinanceCategoryModal = ({ children }: FragmentProps) => {
  return (
    <Modal>
      <FinanceCategoryDeleteModal />

      {children}
    </Modal>
  );
};
