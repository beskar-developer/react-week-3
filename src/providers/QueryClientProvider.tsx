import { ONE_MINUTE, ONE_SECOND } from "@shared-vendor/constants";

import { sessionStorage } from "@shared-vendor/services";

const QUERY_CLIENT_OPTIONS: QueryClientConfig = {
  defaultOptions: {
    mutations: {
      onError: (error) => console.error(error),
    },
    queries: {
      staleTime: 10 * ONE_MINUTE,
      retryDelay: 2 * ONE_SECOND,
    },
  },
  queryCache: new QueryCache({
    onError: (error) => console.error(error),
  }),
};

const queryClient = new QueryClient(QUERY_CLIENT_OPTIONS);
const persister = createAsyncStoragePersister({
  storage: sessionStorage,
});

export const QueryClientProvider = ({ children }: FragmentProps) => {
  return (
    <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
      <ReactQueryDevtools initialIsOpen={false} />

      {children}
    </PersistQueryClientProvider>
  );
};
