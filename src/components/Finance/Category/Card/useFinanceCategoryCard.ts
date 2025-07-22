export const useFinanceCategoryCard = () => {
  const {
    finance: { setCategoryId },
  } = useRouter();

  const onAction = setCategoryId;

  return { onAction };
};
