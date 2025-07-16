import { useMoviesQuery } from "@/api/Movie/query";

export const MovieListGrid = () => {
  const {
    data: { results: movies },
  } = useMoviesQuery();

  return (
    <motion.ul className="grid size-full grid-cols-2 gap-2 overflow-auto px-2 pb-32 sm:grid-cols-3 md:grid-cols-4 md:gap-4 md:px-6 xl:grid-cols-5">
      {movies.map((movie) => (
        <motion.li key={movie.id}>
          <MovieCard {...movie} />
        </motion.li>
      ))}
    </motion.ul>
  );
};
