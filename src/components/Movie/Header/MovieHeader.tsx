export const MovieHeader = () => {
  return (
    <div className="flex items-end justify-between gap-2 px-3 py-4 md:px-6">
      <MovieSearchField />

      <MoviePagination />
    </div>
  );
};
