import { useMovieDetailsQuery } from "@/api/Movie/query";

export const MovieDetailsTitle = () => {
  const {
    data: { title, overview },
  } = useMovieDetailsQuery();

  return (
    <>
      <h1 className="text-sm font-black sm:text-2xl">{title}</h1>

      <p className="text-xs text-gray-600 dark:text-gray-300">{overview}</p>
    </>
  );
};
