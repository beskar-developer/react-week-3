import { ONE_DAY } from "@shared-vendor/constants";

import { defineQuery } from "@shared-vendor/helpers";
import service from "@/api/Movie/service";

export const useGenresQuery = () => {
  const endPoints = useEndPoints();

  const queryConfig = defineQuery({
    queryKey: endPoints.movie.getGenres(),
    queryFn: () => service.getGenres(),
    initialData: [],
    staleTime: ONE_DAY,
  });

  const query = useQuery(queryConfig);

  return query;
};

export const useMovieDetailsQuery = () => {
  const endPoints = useEndPoints();
  const {
    movie: { id },
  } = useRouter();

  const queryConfig = defineQuery({
    queryKey: endPoints.movie.getMovieDetails(id),
    queryFn: () => service.getMovieDetails({ id }),
    initialData: {},
  });

  const query = useQuery(queryConfig);

  return query;
};

const MOVIES_QUERY_INITIAL_DATA = {
  page: 1,
  totalPages: 1,
  results: [],
};

export const useMoviesQuery = () => {
  const endPoints = useEndPoints();

  const {
    movie: { page, debouncedSearch },
  } = useRouter();

  const queryConfig = defineQuery({
    queryKey: endPoints.movie.getMovies(page, debouncedSearch),
    queryFn: () => service.getMovies({ page, query: debouncedSearch }),
    initialData: MOVIES_QUERY_INITIAL_DATA,
  });

  const query = useQuery(queryConfig);

  return query;
};
