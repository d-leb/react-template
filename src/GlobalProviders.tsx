import { ReactNode } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'

import { MessageProvider } from 'translations'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

interface Props {
  children: ReactNode
}

export const GlobalProviders = ({ children }: Props) => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <HelmetProvider>
        <MessageProvider>{children}</MessageProvider>
      </HelmetProvider>
    </BrowserRouter>
  </QueryClientProvider>
)
