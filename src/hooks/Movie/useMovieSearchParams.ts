import { createSetSearchParam } from "@shared-vendor/helpers";

const DEFAULT_PAGE = 1;
const DEFAULT_SEARCH = "";
const KEYS = {
  PAGE: "page",
  SEARCH: "search",
};

export const useMovieSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = +(searchParams.get(KEYS.PAGE) ?? DEFAULT_PAGE);
  const search = searchParams.get(KEYS.SEARCH) ?? DEFAULT_SEARCH;

  const setPage = createSetSearchParam(setSearchParams, KEYS.PAGE);
  const setSearch = createSetSearchParam(setSearchParams, KEYS.SEARCH);

  const debouncedSearch = useDebounce(search, 800, () => setPage(1));

  return { page, search, debouncedSearch, setSearch, setPage };
};
