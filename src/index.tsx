import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { reportWebVitals } from 'utils/reportWebVitals'
import { App } from './App'

const rootElement = document.getElementById('root')
const root = rootElement ? createRoot(rootElement) : undefined

root?.render(
  <StrictMode>
    <App />
  </StrictMode>
)

reportWebVitals()
