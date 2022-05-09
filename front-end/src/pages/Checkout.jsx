import React, { useState, useEffect, useContext } from 'react';
import { Button, ItemBox, QuantityBox,
  PriceBox, SubTotalBox, DescriptionBox, TotalBox } from '../components';
import LoginContext from '../context/LoginContext';

function Checkout() {
  const [products, setProducts] = useState([]);
  const { currency } = useContext(LoginContext);
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
  let arrayOfProducts = JSON.parse(localStorage.getItem('myProducts'));
  useEffect(() => {
    setProducts(arrayOfProducts);
  }, [arrayOfProducts]);

  const handleRemoveClick = (event) => {
    arrayOfProducts = JSON.parse(localStorage.getItem('myProducts'));
    const index = event.target.parentElement.parentElement.id;
    arrayOfProducts.splice(index, 1);
    localStorage.setItem('myProducts', JSON.stringify(arrayOfProducts));
    setProducts(arrayOfProducts);
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
            { products.map((product, index) => (
              <tr key={ index } name={ index }>
                <td className="item-box"><ItemBox inputInfo={ index + 1 } /></td>
                <td
                  dataTestId={ `customer_checkout__element-order-table-name-<${index}>` }
                  className="description-box"
                >
                  <DescriptionBox inputInfo={ product.name } />
                </td>
                <td
                  dataTestId={
                    `customer_checkout__element-order-table-quantity-<${index}>`
                  }
                  className="quantity-box"
                >
                  <QuantityBox inputInfo={ product.quantity } />
                </td>
                <td
                  dataTestId={
                    `customer_checkout__element-order-table-unit-price-<${index}>`
                  }
                  className="price-box"
                >
                  <PriceBox inputInfo={ currency(product.price, 'R$') } />
                </td>
                <td
                  dataTestId={
                    `customer_checkout__element-order-table-sub-total-<${index}>`
                  }
                  className="subtotal-box"
                >
                  <SubTotalBox
                    inputInfo={ currency(product.quantity * product.price, 'R$') }
                  />
                </td>
                <td id={ index } className="remove-button">
                  <Button
                    dataTestId={
                      `customer_checkout__element-order-table-remove-<${index}>`
                    }
                    path=""
                    buttonText="Remover"
                    className="remove-button"
                    onClick={ (event) => handleRemoveClick(event) }
                  />
                </td>
              </tr>))}
          </tbody>
        </table>
        <div className="total-box-container">
          <TotalBox
            dataTestId="customer_checkout__element-order-total-price"
            className="total-box"
            inputInfo={ currency(products.reduce((acc, product) => (
              acc + product.price * product.quantity
            ), 0), 'R$') }
          />
        </div>
      </div>
      <h3>Detalhes e Endereço para Entrega</h3>
      <div className="main-box">
        <div className="finish-button-container">
          <Button
            className="finish-order-button"
            dataTestId="customer_checkout__button-submit-order"
            path=""
            buttonText="FINALIZAR PEDIDO"
          />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
