const MovieDetails = () => {
  return (
    <div className="flex h-full flex-col gap-2 px-1 pt-4 md:px-6 md:pt-8">
      <MovieDetailsHeader />

      <MovieDetailsContent />
    </div>
  );
};

export default MovieDetails;
