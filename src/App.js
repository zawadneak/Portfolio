import React from 'react';
import { Router } from 'react-router-dom';
import Navigator from '~/components/Navigator';
import Footer from '~/components/Footer';
import Routes from './routes';

import history from '~/services/history';

const App = () => {
  return (
    <>
      <Router history={history}>
        <Navigator location={history.location} />
        <Routes />
        <Footer />
      </Router>
    </>
  );
};

export default App;
