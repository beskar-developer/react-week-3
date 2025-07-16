export const MovieDetailsCard = () => {
  return (
    <Card className="flex h-full sm:h-auto">
      <MovieDetailsPoster />

      <MovieDetailsPreview />
    </Card>
  );
};
