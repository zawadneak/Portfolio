import React from 'react';
import { Router } from 'react-router-dom';
import Navigator from '~/components/Navigator';
import Routes from './routes';

import history from '~/services/history';

const App = () => {
  return (
    <>
      <Router history={history}>
        <Navigator location={history.location} />
        <Routes />
      </Router>
    </>
  );
};

export default App;
