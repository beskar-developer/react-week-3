export const useFinanceTransactionCard = () => {
  const {
    finance: { setTransactionId },
  } = useRouter();

  const onAction = setTransactionId;

  return { onAction };
};
