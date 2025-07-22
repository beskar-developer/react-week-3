export const useFinanceTransactionHeader = () => {
  const {
    finance: { setTransactionId },
  } = useRouter();

  const onAdd = () => setTransactionId("");

  return { onAdd };
};
