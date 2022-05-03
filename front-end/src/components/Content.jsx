import React from 'react';
import { Route, Switch } from 'react-router';
import Login from '../pages/Login';
import Register from '../pages/Register';
import DropdownMenu from './DropdownMenu';

function Content() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/componentsview" component={ DropdownMenu } />
      <Route exact path="/subscribe" component={ Register } />
    </Switch>
  );
}

export default Content;
