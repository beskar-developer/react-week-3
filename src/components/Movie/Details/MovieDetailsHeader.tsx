import { AiOutlineArrowRight } from "react-icons/ai";

export const MovieDetailsHeader = () => {
  const { navigateBack } = useRouter();

  return (
    <BaseButton variant="text" className="max-w-min" onClick={navigateBack}>
      <AiOutlineArrowRight />
      بازگشت
    </BaseButton>
  );
};
