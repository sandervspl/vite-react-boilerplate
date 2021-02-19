import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from 'styles/theme';

import App from './App';

const Root: React.VFC = () => {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
};

export default Root;
