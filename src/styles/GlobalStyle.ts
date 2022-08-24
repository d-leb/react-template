import { createGlobalStyle } from 'styled-components'

import { Colors } from 'styles/Colors'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans';
    src: url('/fonts/OpenSans-Regular.woff2') format('woff2'), url('/fonts/OpenSans-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  body {
    margin: 0 40px;
    padding: 0;

    background-color: ${Colors.PAGE_BACKGROUND};
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: ${Colors.PAGE_TEXT};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
  }
  h1 {
    font-size: 3em;
  }
  h2 {
    font-size: 2em;
  }
  h3 {
    font-size: 1.4em;
  }
`
