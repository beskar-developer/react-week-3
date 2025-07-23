export const useFinanceTransactionFilterSelect = () => {
  const {
    finance: { categoryId, setCategoryId },
  } = useRouter();

  const field = {
    value: categoryId,
    onChange: setCategoryId,
  };

  return { field };
};
