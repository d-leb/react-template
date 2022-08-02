import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { GlobalStyle } from 'styles/GlobalStyle'
import { reportWebVitals } from 'utils/reportWebVitals'
import { App } from './App'

const rootElement = document.getElementById('root')
const root = rootElement ? createRoot(rootElement) : undefined

root?.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
)

reportWebVitals()
