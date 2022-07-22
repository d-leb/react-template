import { render, ComponentChild } from 'preact'

import { App } from './App'

const renderApp = (app: ComponentChild): void => {
  const rootElement = document.getElementById('root')
  if (rootElement) {
    render(app, rootElement)
  }
}

renderApp(<App />)
