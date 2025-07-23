import { AiFillInteraction } from "react-icons/ai";

export const FilterTransactionResetButton = () => {
  const { reset } = useFinanceTransactionResetButton();

  return (
    <BaseButton icon onClick={reset}>
      <AiFillInteraction />
    </BaseButton>
  );
};
