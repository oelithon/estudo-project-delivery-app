import React, { useContext } from 'react';
import { ItemBox, QuantityBox,
  PriceBox, SubTotalBox, DescriptionBox, TotalBox, Button, Navbar } from '../components';
import LoginContext from '../context/LoginContext';

function OrderPage() {
  const { currency } = useContext(LoginContext);
  // O arrayOfProducts e orderInfo serão enviados pelo backend:
  const arrayOfProducts = [
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
  ];

  const orderInfo = {
    saleNumber: '0001',
    seller: 'Thereza',
    date: '07/04/2021',
    status: 'ENTREGUE',
  };

  return (
    <div>
      <Navbar
        usertype={ JSON.parse(localStorage.getItem('customer')).role } 
        username={ JSON.parse(localStorage.getItem('customer')).name }
      />
      <h3 className="container-title">Detalhe do Pedido</h3>
      <div className="order-box">
        <div className="order-number">
          <strong>
            PEDIDO
            { orderInfo.saleNumber }
          </strong>
          ; P. Vend:
          { orderInfo.seller }
        </div>
        <div className="order-date">{ orderInfo.date }</div>
        <div className="order-status">{ orderInfo.status }</div>
        <Button
          className="delivery-check-button"
          dataTestId="customer_order_details__button-delivery-check"
          path=""
          buttonText="MARCAR COMO ENTREGUE"
          // onClick={ handleDeliveryCheckClick }
        />
      </div>
      <div className="main-box-order">
        <table>
          <tr>
            <th className="item-header">Item</th>
            <th className="description-header">Descrição</th>
            <th className="quantity-header">Quantidade</th>
            <th className="price-header">Valor Unitário</th>
            <th className="sub-total-header">Sub-total</th>
          </tr>
          <tbody>
            { arrayOfProducts.map((product, index) => (
              <tr key={ index } name={ index }>
                <td
                  className="item-box"
                >
                  <ItemBox
                    dataTestId={
                      `customer_order_details__element-order-table-item-number-<${index}>`
                    }
                    inputInfo={ index + 1 }
                  />
                </td>
                <td className="description-box">
                  <DescriptionBox
                    dataTestId={
                      `customer_order_details__element-order-table-name-<${index}>`
                    }
                    inputInfo={ product.name }
                  />
                </td>
                <td className="quantity-box">
                  <QuantityBox
                    dataTestId={
                      `customer_order_details__element-order-table-quantity-<${index}>`
                    }
                    inputInfo={ product.quantity }
                  />
                </td>
                <td className="price-box">
                  <PriceBox
                    dataTestId={
                      `customer_order_details__element-order-table-unit-price-<${index}>`
                    }
                    inputInfo={ currency(product.price, 'R$') }
                  />
                </td>
                <td className="subtotal-box-order">
                  <SubTotalBox
                    dataTestId={
                      `customer_order_details__element-order-table-sub-total-<${index}>`
                    }
                    inputInfo={ currency(product.quantity * product.price, 'R$') }
                  />
                </td>
              </tr>))}
          </tbody>
        </table>
        <div className="total-box-container">
          <TotalBox
            dataTestId="customer_order_details__element-order-total-price"
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

export default OrderPage;
