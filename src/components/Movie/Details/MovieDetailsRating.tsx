import { useMovieDetailsQuery } from "@/api/Movie/query";

export const MovieDetailsRating = () => {
  const {
    data: { voteAverage },
  } = useMovieDetailsQuery();

  return (
    <MovieCardRow label="امتیاز">
      <MovieCardRating voteAverage={voteAverage} />
    </MovieCardRow>
  );
};
