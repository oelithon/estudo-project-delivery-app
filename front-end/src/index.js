import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from '../src/pages/Login';
import Register from '../src/pages/Register';
import Checkout from './pages/Checkout';
import { Counter } from './components';
import LoginProvider from './context/LoginProvider';
import SalesTest from './pages/SalesTest';

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <LoginProvider>
      <Routes>
        <Route exact path="/componentsview" celement={<Counter />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/customer/checkout" element={<Checkout />} />
        <Route exact path="/customer/orders/:id" element={<SalesTest />} />
        <Route exact path="/" element={<Navigate to="/login" />} />
      </Routes>
    </LoginProvider>
  </BrowserRouter>,
  rootElement
);
