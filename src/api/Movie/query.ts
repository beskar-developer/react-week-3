import type { GetMovieDetailsParams } from "@/api/Movie/type";

import { QUERY_KEYS } from "@/constants/Movie/query";

import service from "@/api/Movie/service";

export const useGenresQuery = () => {
  const query = useQuery({
    queryKey: QUERY_KEYS.GET_GENRES,
    queryFn: () => service.getGenres(),
  });

  return query;
};

export const useMovieDetails = ({ id }: GetMovieDetailsParams) => {
  const query = useQuery({
    queryKey: [...QUERY_KEYS.GET_MOVIE_DETAILS, id],
    queryFn: () => service.getMovieDetails({ id }),
  });

  return query;
};

const MOVIES_QUERY_INITIAL_DATA = {
  page: 1,
  totalPages: 1,
  results: [],
};

const createMoviesQueryConfig = (page: number, debouncedSearch: string) =>
  queryOptions({
    queryKey: [...QUERY_KEYS.GET_MOVIES, page, debouncedSearch],
    queryFn: () => service.getMovies({ page, query: debouncedSearch }),
    initialData: MOVIES_QUERY_INITIAL_DATA,
    initialDataUpdatedAt: 0,
  });

export const useMoviesQuery = () => {
  const { page, debouncedSearch } = useMovieSearchParams();
  const queryClient = useQueryClient();

  const query = useQuery(createMoviesQueryConfig(page, debouncedSearch));

  const totalPages = query.data?.totalPages;
  const isPageLesserThatTotalPages = page < (totalPages ?? 1);
  const isPageGreaterThanOne = page > 1;

  useEffect(() => {
    if (isPageLesserThatTotalPages)
      queryClient.prefetchQuery(createMoviesQueryConfig(page + 1, debouncedSearch));

    if (isPageGreaterThanOne) queryClient.prefetchQuery(createMoviesQueryConfig(page - 1, debouncedSearch));
  }, [isPageLesserThatTotalPages, isPageGreaterThanOne, debouncedSearch]);

  return query;
};
