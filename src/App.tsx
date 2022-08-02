import styled from 'styled-components'

const Container = styled.div`
  width: 200px;
  height: 150px;
  margin: 20px;
  padding: 20px;
  border: 1px solid #222;
  border-radius: 8px;
`

export const App = () => (
  <main>
    <h1>react-template</h1>
    <Container>Hello World!</Container>
  </main>
)
