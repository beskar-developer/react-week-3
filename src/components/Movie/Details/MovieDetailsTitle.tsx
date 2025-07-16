import { useMovieDetailsQuery } from "@/api/Movie/query";

export const MovieDetailsTitle = () => {
  const {
    data: { title, overview },
  } = useMovieDetailsQuery();

  return (
    <>
      <h1 className="text-2xl font-black">{title}</h1>

      <p className="text-xs text-gray-600 dark:text-gray-300">{overview}</p>
    </>
  );
};
