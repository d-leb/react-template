import { ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'
import styled from 'styled-components'

import { Breakpoints } from 'styles'
import { useMobileBreakpoint } from 'utils/browser'

interface Props {
  children?: ReactNode
  heading: string
}

const Section = styled.section`
  display: block;
  width: 100%;
`

const Content = styled.div`
  margin-right: auto;
  margin-left: auto;
  border: 1px solid #222;
  border-radius: 8px;
  padding: 10px 40px 40px;
  max-width: 48em;

  @media ${Breakpoints.Mobile} {
    padding: 10px 20px 20px;
  }
`

export const PageTemplate = ({ children, heading }: Props) => {
  const isMobile = useMobileBreakpoint()
  const title = `react-template${heading ? ` - ${heading}` : ''}`
  return (
    <Section>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={title} />
      </Helmet>
      <Content>
        {!isMobile && <h1>{title}</h1>}
        {children}
      </Content>
    </Section>
  )
}
