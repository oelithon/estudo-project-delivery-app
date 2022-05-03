import React from 'react';
import { Route, Switch } from 'react-router';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Counter from './Counter';

function Content() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/componentsview" component={ Counter } />
      <Route exact path="/subscribe" component={ Register } />
    </Switch>
  );
}

export default Content;
