export const MovieCard = ({ id, posterPath, title, releaseDate, voteAverage }: IMovieCard) => {
  const {
    movie: { navigateToDetails },
  } = useRouter();

  return (
    <Card className="flex h-full flex-col gap-2" onClick={() => navigateToDetails(id)}>
      <ImageLoader className="h-80" src={posterPath ?? "null"} alt={title} />

      <MovieCardContent title={title} releaseDate={releaseDate} voteAverage={voteAverage} />
    </Card>
  );
};
