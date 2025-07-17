import { useMovieDetailsQuery } from "@/api/Movie/query";

export const MovieDetailsTitle = () => {
  const {
    data: { title, overview },
  } = useMovieDetailsQuery();

  return (
    <>
      <h1 className="text-sm font-black sm:text-2xl">{title}</h1>

      <p className="text-surface-600 dark:text-surface-300 text-xs">{overview}</p>
    </>
  );
};
