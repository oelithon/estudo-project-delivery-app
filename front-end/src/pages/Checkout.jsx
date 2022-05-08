import React from 'react';
import { Button, ItemBox, QuantityBox,
  PriceBox, SubTotalBox, DescriptionBox, TotalBox } from '../components';
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

  function currency(value, coin) {
    const fixedValue = value.toFixed(2);
    const modifiedValue = fixedValue.replace('.', ',');
    const newCurrency = `${coin} ${modifiedValue}`;

    return newCurrency;
  }

  // --------Simulando o localStorage------

  return (
    <div>
      <h3>Finalizar Pedido</h3>
      <div className="products-box">
        <table>
          <tr>
            <th className="item-header">Item</th>
            <th className="description-header">Descrição</th>
            <th className="quantity-header">Quantidade</th>
            <th className="price-header">Valor Unitário</th>
            <th className="sub-total-header">Sub-total</th>
            <th className="remove-header">Remover Item</th>
          </tr>
          <tbody>
            { arrayOfProducts.map((product, index) => (
              <tr key={ index }>
                <td className="item-box"><ItemBox inputInfo={ index + 1 } /></td>
                <td className="description-box">
                  <DescriptionBox inputInfo={ product.name } />
                </td>
                <td className="quantity-box">
                  <QuantityBox inputInfo={ product.quantity } />
                </td>
                <td className="price-box">
                  <PriceBox inputInfo={ currency(product.price, 'R$') } />
                </td>
                <td className="subtotal-box">
                  <SubTotalBox
                    inputInfo={ currency(product.quantity * product.price, 'R$') }
                  />
                </td>
                <td className="remove-button">
                  <Button path="" buttonText="Remover" className="remove-button" />
                </td>
              </tr>))}
          </tbody>
        </table>
        <div className="total-box-container">
          <TotalBox
            className="total-box"
            inputInfo={ currency(arrayOfProducts.reduce((acc, product) => (
              acc + product.price * product.quantity
            ), 0), 'R$') }
          />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
