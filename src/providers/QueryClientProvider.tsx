import { QueryClientProvider as Provider } from "@tanstack/react-query";

import { ONE_MINUTE } from "@shared-vendor/constants";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const QUERY_CLIENT_OPTIONS: QueryClientConfig = {
  defaultOptions: {
    mutations: {
      onError: (error) => console.error(error),
    },
    queries: {
      staleTime: 10 * ONE_MINUTE,
    },
  },
  queryCache: new QueryCache({
    onError: (error) => console.error(error),
  }),
};
const queryClient = new QueryClient(QUERY_CLIENT_OPTIONS);

export const QueryClientProvider = ({ children }: FragmentProps) => {
  return (
    <Provider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      {children}
    </Provider>
  );
};
