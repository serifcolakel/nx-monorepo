import { PropsWithChildren } from 'react';
import {
  isServer,
  QueryClient,
  QueryClientProvider,
  useIsFetching,
  useIsMutating,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

export const queryClient = new QueryClient();

export {
  useMutation,
  useQuery,
  useQueryClient,
  useIsFetching,
  useIsMutating,
  isServer,
};

export default function TanStackQueryProvider({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
