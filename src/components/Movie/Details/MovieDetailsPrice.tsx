import { AiFillDollarCircle } from "react-icons/ai";

interface IMovieDetailsPrice {
  label: string;
  value: number | string;
}

export const MovieDetailsPrice = ({ label, value }: IMovieDetailsPrice) => {
  const normalizedValue = value ? convertNumberToLocaleString(value) : "نامشخص";

  return (
    <MovieCardRow label={label}>
      <span className="flex items-center gap-1">
        {normalizedValue}

        <AiFillDollarCircle className="text-success-500" />
      </span>
    </MovieCardRow>
  );
};
