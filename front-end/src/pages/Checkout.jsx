import React from 'react';
import { Button, ItemBox, QuantityBox, PriceBox, SubTotalBox, DescriptionBox } from '../components';
import TotalBox from '../components/TotalBox';
import useCurrency from '../Hooks/useCurrency';
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
  let totalPrice = 0
  
  const finalPrice = arrayOfProducts.map((product) => {
    const subTotalPrice = product.name * product.quantity;
    totalPrice = totalPrice + subTotalPrice;

    return totalPrice;
  })

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
              <PriceBox inputInfo={ useCurrency(product.price, "R$") } />
              <SubTotalBox inputInfo={ useCurrency(product.quantity * product.price, "R$") } />
              <Button path="" buttonText="Remover" className="remove-button" />
            </li>
          )) }
        </ul>
        {/* <div className="total-box-container">
          <TotalBox inputInfo={ useCurrency(finalPrice, "R$") }/>
        </div> */}
      </div>
    </div>
  );
}

export default Checkout;
