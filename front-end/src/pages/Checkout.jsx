// Essa página está sendo usada somente para visualizar os componentes criados

import React, { useEffect } from 'react';
import { ItemBox } from '../components';
import '../styles/checkout.css';

function Checkout() {
  // --------Simulando o localStorage------

  const myProducts = JSON.stringify([
    {
      name: 'Becks 330ml',
      price: 4.49,
      quantity: 2,
    },
    {
      name: 'Antartica Pilsen 300ml',
      price: 2.49,
      quantity: 5,
    },
    {
      name: 'Heineken 600ml',
      price: 7.5,
      quantity: 5,
    },
  ]);

  useEffect(() => {
    localStorage.setItem('myProducts', myProducts);
  }, [myProducts]);

  // --------Simulando o localStorage------

  return (
    <div>
      <p>Finalizar Pedido</p>
      <div className="products-box">
        <p>Item</p>
        <ItemBox />
        <ItemBox />
      </div>
    </div>
  );
}

export default Checkout;
