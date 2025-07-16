const MovieList = () => {
  return (
    <div className="flex h-full flex-col overflow-hidden pt-8">
      <MovieHeader />

      <MovieListContent />
    </div>
  );
};

export default MovieList;
