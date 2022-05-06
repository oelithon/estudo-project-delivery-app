// Essa página está sendo usada somente para visualizar os componentes criados

import React from 'react';
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
      quantity: 3,
    },
  ]);

  localStorage.setItem('myProducts', myProducts);
  const arrayOfProducts = JSON.parse(localStorage.getItem('myProducts'));
  console.log(arrayOfProducts);

  // --------Simulando o localStorage------

  return (
    <div>
      <p>Finalizar Pedido</p>
      <div className="products-box">
        <div className="products-header">
          <p className="item-header">Item</p>
          <p className="description-header">Descrição</p>
          <p className="quantity-header">Quantidade</p>
          <p className="price-header">Valor Unitário</p>
          <p className="sub-total-header">Sub-total</p>
          <p className="remove-header">Remover Item</p>
        </div>
        <ul className="products-list">
          { arrayOfProducts.map((product, index) => (
            <li className="list-item" key={ index }>
              <ItemBox inputInfo={ index + 1 } />
              <DescriptionBox inputInfo={ product.name } />
              <QuantityBox inputInfo={ product.quantity } />
              <PriceBox inputInfo={ Number((product.price).toFixed(2)) } />
              <SubTotalBox inputInfo={ Number((product.quantity * product.price).toFixed(2)) } />
              <Button path="" buttonText="Remover" className="remove-button" />
            </li>
          )) }
        </ul>
        {/* <ul className="products-list">
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
        </ul> */}
      </div>
    </div>
  );
}

export default Checkout;
