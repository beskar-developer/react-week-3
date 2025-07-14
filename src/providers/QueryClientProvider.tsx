import { QueryClientProvider as Provider, type QueryClientConfig } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const QUERY_CLIENT_OPTIONS: QueryClientConfig = {
  defaultOptions: {
    mutations: {
      onError: (error) => console.error(error),
    },
  },
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
