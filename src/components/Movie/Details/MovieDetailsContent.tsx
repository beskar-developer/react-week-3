import { useMovieDetailsQuery } from "@/api/Movie/query";

export const MovieDetailsContent = () => {
  const { isFetching } = useMovieDetailsQuery();

  return (
    <div className="flex h-full items-center justify-center">
      <LoadingContainer loading={isFetching} message="در حال دریافت اطلاعات فیلم...">
        <MovieDetailsCard />
      </LoadingContainer>
    </div>
  );
};
