export const MovieHeader = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4">
      <MovieSearchField />

      <MoviePagination />
    </div>
  );
};
