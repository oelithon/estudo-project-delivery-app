import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from '../src/pages/Login';
import Register from '../src/pages/Register';

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/" element={<Navigate to="/login" />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
