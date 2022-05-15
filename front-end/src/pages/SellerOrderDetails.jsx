import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ItemBox, QuantityBox,
  PriceBox, SubTotalBox, DescriptionBox, TotalBox, Navbar } from '../components';
import LoginContext from '../context/LoginContext';

function CustomerOrderDetails() {
  const [order, setOrder] = useState(
    {
      id: 0, // id do pedido realizado
      userId: 0, // id da pessoa usuária logada que realizou o pedido
      sellerId: 0, // id do vendedor selecionado
      totalPrice: 0, // valor total da compra realizada
      deliveryAddress: '', // endereço para entrega do pedido
      deliveryNumber: '', // número do local de entrega
      saleDate: '', // datetime do momento da venda
      status: '', // status de pedido
      user_id: 0,
      products: [
        {
          id: 0,
          name: '',
          price: 0,
          url_image: '',
          quantity: 0,
        },
      ],
      date: '',
    },
  );
  const { id } = useParams();

  const { currency } = useContext(LoginContext);

  const preparingButtonStatus = order.status === 'Pendente';
  const dispatchButtonStatus = order.status === 'Preparando';

  useEffect(() => {
    axios.get(`http://localhost:3001/customer/orders/${id}`, {
      headers: {
        authorization: JSON.parse(localStorage.getItem('user')).token,
      },
    })
      .then((res) => setOrder(res.data))
      .catch((error) => console.log(JSON.stringify(error)));
  }, [id]);

  const handleDispatchClick = async () => {
    await fetch(`http://localhost:3001/customer/orders/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: JSON.parse(localStorage.getItem('user')).token,
      },
      body: JSON.stringify({
        ...order,
        status: 'Em Trânsito',
      }),
    }).then((res) => res.json());

    setOrder({
      ...order,
      status: 'Em Trânsito',
    });
  };

  const handlePreparingClick = async () => {
    await fetch(`http://localhost:3001/customer/orders/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: JSON.parse(localStorage.getItem('user')).token,
      },
      body: JSON.stringify({
        ...order,
        status: 'Preparando',
      }),
    }).then((res) => res.json());

    setOrder({
      ...order,
      status: 'Preparando',
    });
  };

  return (
    <div>
      <Navbar
        usertype={ JSON.parse(localStorage.getItem('user')).role }
        username={ JSON.parse(localStorage.getItem('user')).name }
      />
      <h3 className="container-title">Detalhe do Pedido</h3>
      <div className="order-box">
        <div className="number-seller">
          <div
            className="order-number"
            data-testid="seller_order_details__element-order-details-label-order-id"
          >
            <strong>
              PEDIDO
              { ` 000${order.id}` }
            </strong>
          </div>
        </div>
        <div
          className="order-date"
          data-testid="seller_order_details__element-order-details-label-order-date"
        >
          { order.date }
        </div>
        <div
          className="delivery-status-seller"
          data-testid={ `seller_order_details__element
            -order-details-label-delivery-status` }
        >
          { order.status.toUpperCase() }
        </div>
        <button
          className="preparing-check-button"
          data-testid="seller_order_details__button-preparing-check"
          type="button"
          disabled={ !preparingButtonStatus }
          onClick={ handlePreparingClick }
        >
          PREPARAR PEDIDO
        </button>
        <button
          className="dispatch-check-button"
          data-testid="seller_order_details__button-dispatch-check"
          type="button"
          disabled={ !dispatchButtonStatus }
          onClick={ handleDispatchClick }
        >
          SAIU PARA ENTREGA
        </button>
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
            { order.products.map((product, index) => (
              <tr key={ index } name={ index }>
                <td
                  className="item-box"
                >
                  <ItemBox
                    dataTestId={
                      `seller_order_details__element-order-table-item-number-<${index}>`
                    }
                    inputInfo={ index + 1 }
                  />
                </td>
                <td className="description-box">
                  <DescriptionBox
                    dataTestId={
                      `seller_order_details__element-order-table-name-<${index}>`
                    }
                    inputInfo={ product.name }
                  />
                </td>
                <td className="quantity-box">
                  <QuantityBox
                    dataTestId={
                      `seller_order_details__element-order-table-quantity-<${index}>`
                    }
                    inputInfo={ product.quantity }
                  />
                </td>
                <td className="price-box">
                  <PriceBox
                    dataTestId={
                      `seller_order_details__element-order-table-unit-price-<${index}>`
                    }
                    inputInfo={ currency(product.price, 'R$') }
                  />
                </td>
                <td className="subtotal-box-order">
                  <SubTotalBox
                    dataTestId={
                      `seller_order_details__element-order-table-sub-total-<${index}>`
                    }
                    inputInfo={ currency(product.quantity * product.price, 'R$') }
                  />
                </td>
              </tr>))}
          </tbody>
        </table>
        <div className="total-box-container">
          <TotalBox
            dataTestId="seller_order_details__element-order-total-price"
            className="total-box"
            inputInfo={ currency(order.totalPrice, 'R$') }
          />
        </div>
      </div>
    </div>
  );
}

export default CustomerOrderDetails;
