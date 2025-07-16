import { QUERY_KEYS } from "@/constants/Movie/query";
import { ONE_DAY } from "@shared-vendor/constants";

import service from "@/api/Movie/service";

export const useGenresQuery = () => {
  const query = useQuery({
    queryKey: QUERY_KEYS.GET_GENRES,
    queryFn: () => service.getGenres(),
    initialData: [] as Awaited<ReturnType<typeof service.getGenres>>,
    staleTime: ONE_DAY,
    initialDataUpdatedAt: 0,
  });

  return query;
};

export const useMovieDetailsQuery = () => {
  const { id } = useMovieDetailsParams();

  const query = useQuery({
    queryKey: [...QUERY_KEYS.GET_MOVIE_DETAILS, id],
    queryFn: () => service.getMovieDetails({ id }),
    initialData: {} as Awaited<ReturnType<typeof service.getMovieDetails>>,
    initialDataUpdatedAt: 0,
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

  useEffect(() => {
    const isPageLesserThatTotalPages = page < (totalPages ?? 1);
    const isPageGreaterThanOne = page > 1;

    if (isPageLesserThatTotalPages)
      queryClient.prefetchQuery(createMoviesQueryConfig(page + 1, debouncedSearch));

    if (isPageGreaterThanOne) queryClient.prefetchQuery(createMoviesQueryConfig(page - 1, debouncedSearch));
  }, [page, totalPages, debouncedSearch]);

  return query;
};
