import { ReactNode } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'

interface Props {
  children: ReactNode
}

export const GlobalProviders = ({ children }: Props) => (
  <HelmetProvider>
    <BrowserRouter>{children}</BrowserRouter>
  </HelmetProvider>
)
