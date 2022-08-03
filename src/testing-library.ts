import { FC, ReactElement } from 'react'
import { RenderOptions, render } from '@testing-library/react'

import { GlobalProviders } from 'GlobalProviders'
import { testMessages } from 'translations'

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>): void => {
  render(ui, { wrapper: GlobalProviders as FC, ...options })
}

export const getMessage = (key: string): RegExp => new RegExp(`${testMessages[key]}`, 'i')

export * from '@testing-library/react'

export { customRender as render }
export { testMessages as messages }
