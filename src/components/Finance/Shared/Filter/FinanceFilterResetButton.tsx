import { AiFillInteraction } from "react-icons/ai";

export const FinanceFilterResetButton = () => {
  const { reset } = useFinanceFilterResetButton();

  return (
    <BaseButton icon onClick={reset}>
      <AiFillInteraction />
    </BaseButton>
  );
};
