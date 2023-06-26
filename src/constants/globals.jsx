import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0;
    }

    p {
      margin: 0;
    }
    `;
