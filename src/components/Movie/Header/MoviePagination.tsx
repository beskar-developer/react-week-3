import { useMoviesQuery } from "@/api/Movie/query";

export const MoviePagination = () => {
  const {
    movie: { page, setPage },
  } = useRouter();
  const {
    data: { totalPages },
  } = useMoviesQuery();

  return <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />;
};
