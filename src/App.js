import React from 'react';
import { Router } from 'react-router-dom';
import { wrapHistory } from 'oaf-react-router';
import Navigator from '~/components/Navigator';
import Footer from '~/components/Footer';
import Routes from './Routes';

import history from '~/services/history';

wrapHistory(history);

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
