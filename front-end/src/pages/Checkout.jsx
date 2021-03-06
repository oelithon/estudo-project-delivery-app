import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, ItemBox, QuantityBox,
  PriceBox, SubTotalBox, DescriptionBox, TotalBox, Input, Navbar } from '../components';
import LoginContext from '../context/LoginContext';

function Checkout() {
  const navigate = useNavigate();
  const [sellers, setSellers] = useState(['']);
  const [sellerId, setSellerId] = useState({
    sellerId: '2',
  });
  const [products, setProducts] = useState([{
    description: '',
    price: 0,
    quantity: 0,
  }]);
  const { address, number, currency, settingAddress,
    settingNumber } = useContext(LoginContext);

  useEffect(() => {
    const customerInfo = JSON.parse(localStorage.getItem('user'));
    const arrayOfSellers = [];
    axios.get('http://localhost:3001/checkout', {
      headers: {
        authorization: customerInfo.token,
      },
    })
      .then((res) => arrayOfSellers.push(res.data))
      .then(() => setSellers(arrayOfSellers));
  }, []);

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem('products')));
  }, []);

  const handleRemoveClick = (event) => {
    const newArrayOfProducts = JSON.parse(localStorage.getItem('products'));
    const index = event.target.parentElement.parentElement.id;
    newArrayOfProducts.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(newArrayOfProducts));
    setProducts(newArrayOfProducts);
  };

  const finishOrder = async (body) => {
    const response = await fetch('http://localhost:3001/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: JSON.parse(localStorage.getItem('user')).token,
      },
      body,
    }).then((res) => res.json());

    navigate(`/customer/orders/${response.id}`);
  };

  const handleFinishOrderClick = () => {
    const total = products.reduce((acc, product) => (
      acc + product.price * product.quantity
    ), 0);
    const cartProducts = products.map((product) => ({
      productId: product.productId,
      quantity: product.quantity,
    }));

    const body = JSON.stringify({
      sellerId: sellerId.sellerId,
      totalPrice: total,
      deliveryAddress: address.address,
      deliveryNumber: number.number,
      products: cartProducts,
    });

    finishOrder(body);
  };

  return (
    <div>
      <Navbar
        usertype={ JSON.parse(localStorage.getItem('user')).role }
        username={ JSON.parse(localStorage.getItem('user')).name }
      />
      <h3 className="container-title">Finalizar Pedido</h3>
      <div className="main-box">
        <table>
          <tr>
            <th className="item-header">Item</th>
            <th className="description-header">Descri????o</th>
            <th className="quantity-header">Quantidade</th>
            <th className="price-header">Valor Unit??rio</th>
            <th className="sub-total-header">Sub-total</th>
            <th className="remove-header">Remover Item</th>
          </tr>
          <tbody>
            { products.map((product, index) => (
              <tr key={ index } name={ index }>
                <td
                  className="item-box"
                >
                  <ItemBox
                    dataTestId={
                      `customer_checkout__element-order-table-item-number-${index}`
                    }
                    inputInfo={ index + 1 }
                  />
                </td>
                <td className="description-box">
                  <DescriptionBox
                    dataTestId={
                      `customer_checkout__element-order-table-name-${index}`
                    }
                    inputInfo={ product.description }
                  />
                </td>
                <td className="quantity-box">
                  <QuantityBox
                    dataTestId={
                      `customer_checkout__element-order-table-quantity-${index}`
                    }
                    inputInfo={ product.quantity }
                  />
                </td>
                <td className="price-box">
                  <PriceBox
                    dataTestId={
                      `customer_checkout__element-order-table-unit-price-${index}`
                    }
                    inputInfo={ currency(product.price, 'R$') }
                  />
                </td>
                <td className="subtotal-box">
                  <SubTotalBox
                    dataTestId={
                      `customer_checkout__element-order-table-sub-total-${index}`
                    }
                    inputInfo={ currency(product.quantity * product.price, 'R$') }
                  />
                </td>
                <td id={ index } className="remove-button">
                  <Button
                    dataTestId={
                      `customer_checkout__element-order-table-remove-${index}`
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
      <h3 className="container-title">Detalhes e Endere??o para Entrega</h3>
      <div className="main-box">
        <div className="select-input-container">
          <div className="select-container">
            <p>P. Vendedor(a) Respons??vel</p>
            <select
              data-testid="customer_checkout__select-seller"
              className="select-input"
              id="select"
              onChange={
                ({ target }) => setSellerId({
                  sellerId: Number(target.options[target.selectedIndex].id),
                })
              }
            >
              { sellers.map((seller) => (
                <option
                  className="option-input"
                  value={ seller.name }
                  key={ seller.id }
                  id={ seller.id }
                >
                  { seller.name }
                </option>
              )) }
            </select>
          </div>
          <Input
            inputLabel="Endere??o"
            className="address-input"
            dataTestId="customer_checkout__input-address"
            type="text"
            onChange={ (event) => settingAddress(event) }
            placeholder="Endere??o"
          />
          <Input
            inputLabel="N??mero"
            className="number-input"
            dataTestId="customer_checkout__input-addressNumber"
            type="text"
            onChange={ (event) => settingNumber(event) }
            placeholder="N??mero"
          />
        </div>
        <div className="finish-button-container">
          <Button
            className="finish-order-button"
            dataTestId="customer_checkout__button-submit-order"
            path=""
            buttonText="FINALIZAR PEDIDO"
            onClick={ handleFinishOrderClick }
          />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
