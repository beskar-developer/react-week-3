import { useMovieDetailsQuery } from "@/api/Movie/query";

export const MovieDetailsPoster = () => {
  const {
    data: { posterPath, title },
  } = useMovieDetailsQuery();

  return <ImageLoader className="w-52 shrink-0 sm:w-64" src={posterPath} alt={title} />;
};
