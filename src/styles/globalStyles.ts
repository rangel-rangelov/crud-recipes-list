import { createGlobalStyle } from 'styled-components';

import { colors, others } from './variables';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 40px;
    font-family: ${others.fontFamily};
    font-size: 17px;
    line-height: 24px;
    color: ${colors.midGrey};
    background: ${colors.lighterGrey};

    &.modal-open {
      overflow: hidden;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${colors.darkGrey};
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  .Toastify {
    &__toast {
      font-family: ${others.fontFamily};
      font-size: 15px;
      line-height: 20px;
      color: ${colors.midGrey};
      box-shadow: none;
      border-radius: ${others.borderRadiusSmall};
  
      &--default {
        background: ${colors.lighterGrey};
      }
    }
  
    &__progress-bar {
      background: ${colors.blue};
    }
  
    &__close-button {
      &--default {
        color: ${colors.darkGrey};
        opacity: 1;
      }
    }
  }
  
`;

export default GlobalStyle;