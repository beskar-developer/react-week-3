import { useMoviesQuery } from "@/api/Movie/query";

export const MoviePagination = () => {
  const { page, setPage } = useMovieSearchParams();
  const {
    data: { totalPages },
  } = useMoviesQuery();

  return <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />;
};
