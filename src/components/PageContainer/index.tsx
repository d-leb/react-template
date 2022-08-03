import { ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 20px;
  border: 1px solid #222;
  border-radius: 8px;
  padding: 20px;
  width: 400px;
  height: 250px;
`

interface Props {
  children?: ReactNode
  heading: string
}

export const PageContainer = ({ children, heading }: Props) => {
  const title = `react-template${heading ? ` - ${heading}` : ''}`
  return (
    <section>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={title} />
      </Helmet>
      <h1>{title}</h1>
      <Container>{children}</Container>
    </section>
  )
}
