import { useMovieDetailsQuery } from "@/api/Movie/query";

export const MovieDetailsPoster = () => {
  const {
    data: { posterPath, title },
  } = useMovieDetailsQuery();

  return <ImageLoader className="w-64 shrink-0" src={posterPath} alt={title} />;
};
