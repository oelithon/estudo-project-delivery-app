import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import LoginProvider from './context/LoginProvider';
import { Login, Register, Checkout, Products, CustomerOrderDetails,
  SellerOrderDetails, AllOrders } from './pages';
import './styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <LoginProvider>
        <Routes>
          <Route path="/login" element={ <Login /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/customer/products" element={ <Products /> } />
          <Route path="/customer/checkout" element={ <Checkout /> } />
          <Route path="/customer/orders" element={ <AllOrders /> } />
          <Route path="/customer/orders/:id" element={ <CustomerOrderDetails /> } />
          <Route path="/seller/orders" element={ <AllOrders /> } />
          <Route path="/seller/orders/:id" element={ <SellerOrderDetails /> } />
          <Route exact path="/" element={ <Navigate to="/login" /> } />
        </Routes>
      </LoginProvider>
    </BrowserRouter>
  );
}

export default App;
