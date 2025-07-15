export const MovieCard = ({ id, posterPath, title, releaseDate, voteAverage }: IMovieCard) => {
  const { redirectToMovieDetails } = useMovieCard({ id });

  return (
    <Card className="flex h-full flex-col gap-2" onClick={redirectToMovieDetails}>
      <ImageLoader className="h-80" src={posterPath ?? ""} alt={title} />

      <MovieCardContent title={title} releaseDate={releaseDate} voteAverage={voteAverage} />
    </Card>
  );
};
