'use client';

import { useState, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from '@material-tailwind/react';
import { RecoilRoot } from 'recoil';

function ClientProvider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: false,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default ClientProvider;
