import React from 'react';
import { Route, Switch } from 'react-router';
import { Login, Register, Products } from '../pages';

function Content() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/subscribe" component={ Register } />
      <Route exact path="/customer/products" component={ Products } />
    </Switch>
  );
}

export default Content;
