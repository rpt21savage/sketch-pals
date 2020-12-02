/**
 * The double line import style below is used to future proof the code, as React will
 * not support default exports in the distant future. See
 * https://www.reddit.com/r/reactjs/comments/iyehol/import_react_from_react_will_go_away_in_distant/.
 *
 * Moreover, default exports should be avoided on principle throughout the codebase.
 * See https://basarat.gitbook.io/typescript/main-1/defaultisbad for details.
*/
import * as React from 'react';
import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '../styles/base';
import { Landing } from './Landing';

const App:React.FC = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Landing />
      </ThemeProvider>
    </React.Fragment>
  );
}

export { App };
