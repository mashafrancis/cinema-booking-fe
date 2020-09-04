// react libraries
import * as React from 'react';

// third party packages
import { Redirect, Route, Switch } from 'react-router-dom';

// pages and components
import PageNotFound from '@components/PageNotFound';
import AppContainer from '@pages/AppContainer';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={AppContainer} />
    <Route path="/404" component={PageNotFound} />
    <Redirect to="/404" />
  </Switch>
);
export default Routes;
