import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LoginProvider from './context/LoginProvider';
import { Login, Register, Checkout, Products, SalesTest } from './pages';

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <LoginProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/customer/checkout" element={<Checkout />} />
        <Route path="/customer/orders/:id" element={<SalesTest />} />
        <Route path="/customer/products" element={ <Products /> } />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </LoginProvider>
  </BrowserRouter>,
  rootElement
);
