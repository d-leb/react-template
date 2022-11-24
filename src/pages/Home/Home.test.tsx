import { expect } from '@jest/globals'
import { getMessage, render, screen } from 'testing-library'

import Home from './index'

describe('Home', () => {
  it('renders without error', async () => {
    render(<Home />)

    expect(await screen.findByText(getMessage('home'))).toBeDefined()
    expect(await screen.findByText(getMessage('greeting'))).toBeDefined()
  })
})
