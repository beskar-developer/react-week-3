export const MovieDetailsPreview = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <MovieDetailsTitle />

      <MovieDetailsRating />

      <MovieDetailsStatus />

      <MovieDetailsFinance />

      <MovieDetailsRuntime />

      <MovieDetailsGenreList />
    </div>
  );
};
