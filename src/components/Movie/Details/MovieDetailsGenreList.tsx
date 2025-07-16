import { useMovieDetailsQuery } from "@/api/Movie/query";

export const MovieDetailsGenreList = () => {
  const {
    data: { genres: movieGenres },
  } = useMovieDetailsQuery();

  return (
    <MovieCardRow label="ژانر">
      <div className="flex items-center gap-1">
        {movieGenres?.map(({ id }) => (
          <MovieDetailsGenre id={id} key={id} />
        ))}
      </div>
    </MovieCardRow>
  );
};
