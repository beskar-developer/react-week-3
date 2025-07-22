const FinanceCategory = () => {
  return (
    <div className="flex h-full flex-col gap-8 px-4 py-6">
      <FinanceCategoryModal>
        <FinanceCategoryHeader />

        <FinanceCategoryList />
      </FinanceCategoryModal>
    </div>
  );
};

export default FinanceCategory;
