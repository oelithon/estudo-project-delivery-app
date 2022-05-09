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

  // --------Simulando o localStorage------

  function currency(value, coin) {
    const fixedValue = value.toFixed(2);
    const modifiedValue = fixedValue.replace('.', ',');
    const newCurrency = `${coin} ${modifiedValue}`;

    return newCurrency;
  }

  const handleRemoveClick = () => {
    const getArrayOfProducts = JSON.parse(localStorage.getItem('myProducts'));
    console.log(getArrayOfProducts);
    console.log(typeof getArrayOfProducts);
    console.log('clicou!');
  };

  return (
    <div>
      <h3>Finalizar Pedido</h3>
      <div className="main-box">
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
                <td 
                  data-testid={`customer_checkout__element-order-table-name-<${index}>` }
                  className="description-box"
                >
                  <DescriptionBox inputInfo={ product.name } />
                </td>
                <td 
                  data-testid={`customer_checkout__element-order-table-quantity-<${index}>` }
                  className="quantity-box"
                >
                  <QuantityBox inputInfo={ product.quantity } />
                </td>
                <td 
                  data-testid={`customer_checkout__element-order-table-unit-price-<${index}>` }
                  className="price-box"
                >
                  <PriceBox inputInfo={ currency(product.price, 'R$') } />
                </td>
                <td 
                  data-testid={`customer_checkout__element-order-table-sub-total-<${index}>` }
                  className="subtotal-box"
                >
                  <SubTotalBox
                    inputInfo={ currency(product.quantity * product.price, 'R$') }
                  />
                </td>
                <td className="remove-button">
                  <Button
                    data-testid={`customer_checkout__element-order-table-remove-<${index}>` }
                    path=""
                    buttonText="Remover"
                    className="remove-button"
                    onClick={ handleRemoveClick }
                  />
                </td>
              </tr>))}
          </tbody>
        </table>
        <div className="total-box-container">
          <TotalBox
            data-testid="customer_checkout__element-order-total-price"
            className="total-box"
            inputInfo={ currency(arrayOfProducts.reduce((acc, product) => (
              acc + product.price * product.quantity
            ), 0), 'R$') }
          />
        </div>
      </div>
      <h3>Detalhes e Endereço para Entrega</h3>
      <div className="main-box">
      </div>
    </div>
  );
}

export default Checkout;
