import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '~/pages/Home';
import Work from '~/pages/Work';
import Direct from '~/pages/Direct';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/mywork" exact component={Work} />
      <Route path="/contact" exact component={Direct} />
      <Redirect path="*" to="/" />
    </Switch>
  );
}
