import { AiFillStar } from "react-icons/ai";

export const MovieCardRating = ({ voteAverage }: Pick<IMovieCard, "voteAverage">) => {
  return (
    <div className="flex items-center gap-1">
      <span>10 / {voteAverage}</span>

      <AiFillStar className="text-yellow-500" />
    </div>
  );
};
