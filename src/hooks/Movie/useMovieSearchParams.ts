const DEFAULT_PAGE = 1;
const DEFAULT_SEARCH = "";
const KEYS = {
  PAGE: "page",
  SEARCH: "search",
};

const createSetSearchParam =
  <T>(setSearchParams: SetURLSearchParams, key: string) =>
  (value: T) =>
    setSearchParams((params) => {
      params.set(key, String(value));

      return params;
    });

export const useMovieSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = +(searchParams.get(KEYS.PAGE) ?? DEFAULT_PAGE);
  const search = searchParams.get(KEYS.SEARCH) ?? DEFAULT_SEARCH;

  const debouncedSearch = useDebounce(search, 800);

  const setPage = createSetSearchParam(setSearchParams, KEYS.PAGE);
  const setSearch = createSetSearchParam(setSearchParams, KEYS.SEARCH);

  return { page, search, debouncedSearch, setSearch, setPage };
};
