import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'styles';
import theme from 'styles/theme';
import Home from 'pages/Home';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <main>
        <GlobalStyle />
        <Home />
      </main>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
