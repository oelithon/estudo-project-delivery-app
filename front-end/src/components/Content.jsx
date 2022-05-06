import React from 'react';
import { Route, Switch } from 'react-router';
import Login from '../pages/Login';
import Register from '../pages/Register';
import { DropdownMenu, Counter, ProductCard, Navbar, DeliveryCard } from './index';

function Content() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/DropDownMenu" component={ DropdownMenu } />
      <Route exact path="/Counter" component={ Counter } />
      <Route exact path="/ProductCard" component={ ProductCard } />
      <Route exact path="/Navbar" component={ Navbar } />
      <Route exact path="/DeliveryCard" component={ DeliveryCard } />
      <Route exact path="/subscribe" component={ Register } />
    </Switch>
  );
}

export default Content;
