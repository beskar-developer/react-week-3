import { AiFillDollarCircle } from "react-icons/ai";

interface IMovieDetailsPrice {
  label: string;
  value: number | string;
}

export const MovieDetailsPrice = ({ label, value }: IMovieDetailsPrice) => {
  return (
    <MovieCardRow label={label}>
      <span className="flex items-center gap-1">
        {convertNumberToLocaleString(value)}

        <AiFillDollarCircle className="text-emerald-500" />
      </span>
    </MovieCardRow>
  );
};
