export const useFinanceCategoryHeaderAction = () => {
  const {
    finance: { setCategoryId },
  } = useRouter();

  const createOnClick = (onOpen: IFinanceCategoryHeaderAction["onOpen"]) => () => {
    setCategoryId("");

    onOpen();
  };

  return { createOnClick };
};
