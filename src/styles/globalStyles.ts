import { createGlobalStyle } from 'styled-components';

import { colors } from './variables';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 40px;
    font-family: 'Roboto', sans-serif;
    font-size: 17px;
    line-height: 24px;
    color: ${colors.midGrey};
    background: ${colors.lighterGrey};
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${colors.darkGrey};
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;