import { useMoviesQuery } from "@/api/Movie/query";

export const MovieListGrid = () => {
  const {
    data: { results: movies },
  } = useMoviesQuery();

  return (
    <motion.ul className="grid h-full grid-cols-5 gap-4 overflow-auto px-6 pb-32">
      {movies.map((movie) => (
        <motion.li key={movie.id}>
          <MovieCard {...movie} />
        </motion.li>
      ))}
    </motion.ul>
  );
};
