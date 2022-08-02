import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'

import { GlobalStyle } from 'styles/GlobalStyle'
import { Environment } from 'utils/environment'
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

if (Environment.mode === 'development') {
  import(
    /* webpackMode: "lazy" */
    /* webpackChunkName: "dev-tool-react-axe" */
    '@axe-core/react'
  ).then((axe) => axe.default(React, ReactDOM, 1000))
}

reportWebVitals()
