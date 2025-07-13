import { QueryClientProvider as Provider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export const QueryClientProvider = ({ children }: FragmentProps) => {
  return (
    <Provider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      {children}
    </Provider>
  );
};
