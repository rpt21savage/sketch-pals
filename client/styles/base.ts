import styled, { createGlobalStyle } from 'styled-components';

// TODO: Choose font family
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  body, html {
    height: 100%;
    font-family: 'ABeeZee', sans-serif;
  }
`;

// TODO: Temporary color palette, subject to change based on further design outcomes
export const theme = {
  colors: {
    light: '#eff2ef',
    dark: '#495159',
    primary: '#e6af2e',
    splashPink: '#fe6d73',
    splashBlue: '#4d9de0'
  }
};
