import React from 'react';
import { Navbar } from '../components';

const usertype = 'client';
const username = 'Rafael';

function SalesTest() {
  return (
    <div>
      <Navbar usertype={ usertype } username={ username } />
      <p>Página de Vendas</p>
    </div>
  );
}

export default SalesTest;
