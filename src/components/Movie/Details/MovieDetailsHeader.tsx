import { AiOutlineArrowRight } from "react-icons/ai";

export const MovieDetailsHeader = () => {
  const { redirectToMovieList } = useMovieDetailsHeader();

  return (
    <BaseButton variant="text" className="max-w-min" onClick={redirectToMovieList}>
      <AiOutlineArrowRight />
      بازگشت
    </BaseButton>
  );
};
