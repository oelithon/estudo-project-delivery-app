import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, ItemBox, QuantityBox,
  PriceBox, SubTotalBox, DescriptionBox, TotalBox, Input, Navbar } from '../components';
import LoginContext from '../context/LoginContext';

function Checkout() {
  const navigate = useNavigate();
  // A variável abaixo foi incluída por conta da dificuldade no uso do useEffect para buscar os vendedores.
  const sellers = ['Thereza', 'Rafael', 'Paulo'];
  const { address, number, currency, setProducts, settingAddress,
    settingNumber } = useContext(LoginContext);
  //  Para passar no avaliador, as linhas 12-30 devem ser comentadas. Deletar na versão final.
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

  const handleRemoveClick = (event) => {
    arrayOfProducts = JSON.parse(localStorage.getItem('myProducts'));
    const index = event.target.parentElement.parentElement.id;
    arrayOfProducts.splice(index, 1);
    localStorage.setItem('myProducts', JSON.stringify(arrayOfProducts));
    // O setProducts abaixo, nesse momento, está servindo apenas para atualizar a página.
    setProducts(arrayOfProducts);
  };

  const handleFinishOrderClick = () => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const todayDate = `${day}/${month}`;
    const total = currency(arrayOfProducts.reduce((acc, product) => (
      acc + product.price * product.quantity
    ), 0), 'R$');

    const body = JSON.stringify({
      userId: 1,
      seller_id: 2,
      total_price: total,
      delivery_address: address.address,
      delivery_number: number.number,
      sale_date: todayDate,
      status: 'PENDENTE',
    });

    fetch('http://localhost:3001/sales', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    }).then((res) => res.json())
      .then((data) => {
        navigate(`/customer/orders/${data.id}`);
      });
  };

  const usertype = 'client';
  const username = 'Rafael';

  return (
    <div>
      <Navbar usertype={ usertype } username={ username } />
      <h3 className="container-title">Finalizar Pedido</h3>
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
              <tr key={ index } name={ index }>
                <td
                  className="item-box"
                >
                  <ItemBox
                    dataTestId={
                      `customer_checkout__element-order-table-item-number-<${index}>`
                    }
                    inputInfo={ index + 1 }
                  />
                </td>
                <td className="description-box">
                  <DescriptionBox
                    dataTestId={
                      `customer_checkout__element-order-table-name-<${index}>`
                    }
                    inputInfo={ product.name }
                  />
                </td>
                <td className="quantity-box">
                  <QuantityBox
                    dataTestId={
                      `customer_checkout__element-order-table-quantity-<${index}>`
                    }
                    inputInfo={ product.quantity }
                  />
                </td>
                <td className="price-box">
                  <PriceBox
                    dataTestId={
                      `customer_checkout__element-order-table-unit-price-<${index}>`
                    }
                    inputInfo={ currency(product.price, 'R$') }
                  />
                </td>
                <td className="subtotal-box">
                  <SubTotalBox
                    dataTestId={
                      `customer_checkout__element-order-table-sub-total-<${index}>`
                    }
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
            inputInfo={ currency(arrayOfProducts.reduce((acc, product) => (
              acc + product.price * product.quantity
            ), 0), 'R$') }
          />
        </div>
      </div>
      <h3 className="container-title">Detalhes e Endereço para Entrega</h3>
      <div className="main-box">
        <div className="select-input-container">
          <div className="select-container">
            <p>P. Vendedor(a) Responsável</p>
            <select
              data-testid="customer_checkout__select-seller"
              className="select-input"
            >
              { sellers.map((seller, index) => (
                <option
                  className="option-input"
                  value={ seller }
                  key={ index }
                >
                  { seller }
                </option>
              )) }
            </select>
          </div>
          <Input
            inputLabel="Endereço"
            className="address-input"
            dataTestId="customer_checkout__input-address"
            type="text"
            onChange={ (event) => settingAddress(event) }
            placeholder="Endereço"
          />
          <Input
            inputLabel="Número"
            className="number-input"
            dataTestId="customer_checkout__input-addressNumber"
            type="text"
            onChange={ (event) => settingNumber(event) }
            placeholder="Número"
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
