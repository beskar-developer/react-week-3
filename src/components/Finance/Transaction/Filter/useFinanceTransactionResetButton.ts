export const useFinanceTransactionResetButton = () => {
  const {
    finance: { setCategoryId, setStartDate, setEndDate },
  } = useRouter();

  const reset = () => {
    setCategoryId("");
    setStartDate("");
    setEndDate("");
  };

  return { reset };
};
