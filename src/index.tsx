import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'styles';
import theme from 'styles/theme';

const Home = React.lazy(() => import('pages/Home'));

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <main>
        <GlobalStyle />
        <React.Suspense fallback={<span>loading</span>}>
          <Home />
        </React.Suspense>
      </main>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
