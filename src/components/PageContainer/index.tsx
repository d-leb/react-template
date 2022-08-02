import { ReactNode } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 400px;
  height: 250px;
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #222;
  border-radius: 8px;
`

interface Props {
  children?: ReactNode
  heading: string
}

export const PageContainer = ({ children, heading }: Props) => (
  <section>
    <h1>{heading}</h1>
    <Container>{children}</Container>
  </section>
)
