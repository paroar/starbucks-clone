import React from 'react';
import ViewportProvider from './contexts/viewport';
import Router from './routes/router';

const App = () => (
  <ViewportProvider>
    <Router />
  </ViewportProvider>
);

export default App;
