import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginProvider from './context/LoginProvider';
import { Login, Register, Checkout, Products, SalesTest } from './pages';
import './styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <LoginProvider>
        <Routes>
          <Route path="/" element={ <Login /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/subscribe" element={ <Register /> } />
          <Route path="/customer/checkout" element={ <Checkout /> } />
          <Route path="/customer/orders/:id" element={ <SalesTest /> } />
          <Route path="/customer/products" element={ <Products /> } />
        </Routes>
      </LoginProvider>
    </BrowserRouter>
  );
}

export default App;
