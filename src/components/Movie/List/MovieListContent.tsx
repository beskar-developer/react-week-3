import { useMoviesQuery } from "@/api/Movie/query";

export const MovieListContent = () => {
  const {
    data: { results: movies },
    isFetching,
  } = useMoviesQuery();

  return (
    <div className="flex h-full w-full items-center justify-center">
      <LoadingContainer loading={isFetching} message="در حال گرفتن فیلم ها...">
        <NotFoundContainer itemCount={movies.length} message="فیلمی یافت نشد">
          <MovieListGrid />
        </NotFoundContainer>
      </LoadingContainer>
    </div>
  );
};
