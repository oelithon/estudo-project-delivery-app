import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import LoginProvider from './context/LoginProvider';
import { Login, Register, Checkout, Products, CustomerOrderDetails } from './pages';
import './styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <LoginProvider>
        <Routes>
          <Route path="/login" element={ <Login /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/subscribe" element={ <Register /> } />
          <Route path="/customer/checkout" element={ <Checkout /> } />
          <Route path="/customer/orders/:id" element={ <CustomerOrderDetails /> } />
          <Route path="/customer/products" element={ <Products /> } />
          <Route exact path="/" element={ <Navigate to="/login" /> } />
        </Routes>
      </LoginProvider>
    </BrowserRouter>
  );
}

export default App;
