import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from '../src/pages/Login';
import Register from '../src/pages/Register';
import { Counter } from './components';
import LoginProvider from './context/LoginProvider';
import RegisterProvider from './context/RegisterProvider';

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <LoginProvider>
      <RegisterProvider>
        <Routes>
          <Route exact path="/componentsview" celement={<Counter />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/" element={<Navigate to="/login" />} />
        </Routes>
      </RegisterProvider>
    </LoginProvider>
  </BrowserRouter>,
  rootElement
);
