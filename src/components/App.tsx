import React from 'react';

import GlobalStyle from 'styles';

const Home = React.lazy(() => import('pages/Home'));

const App: React.VFC = () => {
  return (
    <main>
      <GlobalStyle />
      <React.Suspense fallback={<span>loading</span>}>
        <Home />
      </React.Suspense>
    </main>
  );
};

export default App;
