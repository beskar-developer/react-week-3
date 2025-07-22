import type { Movie } from "@/types/Movie";

import { ROUTES as AUTHENTICATION_ROUTES } from "@/constants/Authentication";
import { ROUTES as MOVIE_ROUTES } from "@/constants/Movie";
import { ROUTES as FINANCE_ROUTES } from "@/constants/Finance";

import { createSetSearchParam } from "@shared-vendor/helpers";

type PathMap<T extends string> = Record<T, string> & {
  ROOT_PATH: string;
};

const FINANCE_KEYS = {
  START_DATE: "startDate",
  END_DATE: "endDate",
  CATEGORY_ID: "categoryId",
  TRANSACTION_ID: "transactionId",
};
const DEFAULT_SEARCH_PARAM_VALUE = "";

const DEFAULT_MOVIE_PAGE = 1;
const MOVIE_KEYS = {
  PAGE: "page",
  SEARCH: "search",
};

const generateRoutes = <T extends string>({ ROOT_PATH, ...pathMap }: PathMap<T>) =>
  ({
    ...Object.entries(pathMap).reduce(
      (acc, [key, path]) => ({
        ...acc,
        [key]: `${ROOT_PATH}/${path}`,
      }),
      {},
    ),
    ROOT_PATH,
  }) as PathMap<T>;

const authenticationRoutes = generateRoutes(AUTHENTICATION_ROUTES);
const movieRoutes = generateRoutes(MOVIE_ROUTES);
const financeRoutes = generateRoutes(FINANCE_ROUTES);

export const useRouter = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useParams();

  const navigateBack = () => navigate(-1);

  const authentication = {
    routes: authenticationRoutes,
    navigateToSignin: () => navigate(authenticationRoutes.SIGNIN_PATH),
    navigateToSignup: () => navigate(authenticationRoutes.SIGNUP_PATH),
  };

  const finance = {
    routes: financeRoutes,
    startDate: searchParams.get(FINANCE_KEYS.START_DATE) ?? DEFAULT_SEARCH_PARAM_VALUE,
    endDate: searchParams.get(FINANCE_KEYS.END_DATE) ?? DEFAULT_SEARCH_PARAM_VALUE,
    categoryId: searchParams.get(FINANCE_KEYS.CATEGORY_ID) ?? DEFAULT_SEARCH_PARAM_VALUE,
    transactionId: searchParams.get(FINANCE_KEYS.TRANSACTION_ID) ?? DEFAULT_SEARCH_PARAM_VALUE,
    setStartDate: createSetSearchParam(setSearchParams, FINANCE_KEYS.START_DATE),
    setEndDate: createSetSearchParam(setSearchParams, FINANCE_KEYS.END_DATE),
    setCategoryId: createSetSearchParam(setSearchParams, FINANCE_KEYS.CATEGORY_ID),
    setTransactionId: createSetSearchParam(setSearchParams, FINANCE_KEYS.TRANSACTION_ID),
  };

  const movieSearch = searchParams.get(MOVIE_KEYS.SEARCH) ?? DEFAULT_SEARCH_PARAM_VALUE;
  const setMoviePage = createSetSearchParam(setSearchParams, MOVIE_KEYS.PAGE);
  const debouncedMovieSearch = useDebounce(movieSearch, 800, () => setMoviePage(1));

  const movie = {
    routes: movieRoutes,
    id: +(params.id ?? 0),
    page: +(searchParams.get(MOVIE_KEYS.PAGE) ?? DEFAULT_MOVIE_PAGE),
    search: movieSearch,
    debouncedSearch: debouncedMovieSearch,
    setPage: setMoviePage,
    setSearch: createSetSearchParam(setSearchParams, MOVIE_KEYS.SEARCH),
    navigateToDetails: (id: Movie["id"]) => {
      const path = generatePath(movieRoutes.DETAILS_PATH, { id: String(id) });

      navigate(path);
    },
  };

  return {
    authentication,
    movie,
    finance,
    searchParams,
    params,
    navigate,
    navigateBack,
    setSearchParams,
  };
};
