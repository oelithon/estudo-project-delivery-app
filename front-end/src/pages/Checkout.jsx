// Essa página está sendo usada somente para visualizar os componentes criados

import React, { useEffect } from 'react';
import { Button, ItemBox, QuantityBox, PriceBox, SubTotalBox } from '../components';
import DescriptionBox from '../components/DescriptionBox';
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
        <ul className="products-list">
          <li className="list-item">
            <ItemBox />
            <DescriptionBox />
            <QuantityBox />
            <PriceBox />
            <SubTotalBox />
            <Button path="" buttonText="Remover" className="remove-button" />
          </li>
          <li className="list-item">
            <ItemBox />
            <DescriptionBox />
            <QuantityBox />
            <PriceBox />
            <SubTotalBox />
            <Button path="" buttonText="Remover" className="remove-button" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Checkout;
