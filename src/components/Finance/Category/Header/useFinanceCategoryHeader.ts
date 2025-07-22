export const useFinanceCategoryHeader = () => {
  const {
    finance: { setCategoryId },
  } = useRouter();

  const onAdd = () => setCategoryId("");

  return { onAdd };
};
