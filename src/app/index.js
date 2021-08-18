import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from 'routers';
import { ScrollToTop, ModalPortal } from 'components';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Router.Root />
      <ModalPortal />
    </BrowserRouter>
  );
};
export default App;
