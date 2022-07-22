import { render } from 'preact'

import { App } from './App'

const renderApp = (): void => {
  const rootElement = document.getElementById('root')
  if (rootElement) {
    render(<App />, rootElement)
  }
}

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  import('preact/debug').then(() => {
    renderApp()
  })
} else {
  renderApp()
}
