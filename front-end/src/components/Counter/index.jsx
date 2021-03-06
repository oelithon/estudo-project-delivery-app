import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  addProduct,
  removeProduct,
  getAllProducts,
  readUser,
} from '../../helpers/localStorage';
import './style.css';

const Counter = ({ productId, price, setCart, description }) => {
  const [quantity, setQuantity] = useState(0);
  const userRole = readUser().role;

  const handleClick = (value) => {
    if (value === '+') {
      setQuantity((prevQuantity) => prevQuantity + 1);
      addProduct({ productId, description, price: Number(price) });
    } else if (value === '-' && quantity === 0) {
      console.log('0 é o mínimo');
    } else {
      setQuantity((prevQuantity) => prevQuantity - 1);
      removeProduct({ productId, price: Number(price) });
    }
    const productsInfo = getAllProducts();
    const totalPrice = productsInfo.reduce((acc, product) => (
      acc + product.price * product.quantity
    ), 0);
    const formattedTotalPrice = totalPrice
      .toFixed(2)
      .toString()
      .replace(/\./, ',');
    setCart(formattedTotalPrice);
  };

  const handleChange = (value) => {
    setQuantity((prevQuantity) => prevQuantity + value);
    addProduct({ productId, description, price: Number(price) });
    setQuantity(parseInt(value, 10));
    const productsInfo = getAllProducts();
    const totalPrice = productsInfo.reduce((acc, product) => (
      acc + product.price * product.quantity
    ), 0);
    const formattedTotalPrice = totalPrice
      .toFixed(2)
      .toString()
      .replace(/\./, ',');
    setCart(formattedTotalPrice);
  };

  useEffect(() => {
    if (Number.isNaN(quantity)) return setQuantity(0);
  }, [quantity]);

  return (
    <div className="Counter__div">
      <button
        className="Counter__button --left"
        data-testid={ `${userRole}_products__button-card-rm-item-${productId}` }
        type="button"
        value="-"
        onClick={ ({ target }) => handleClick(target.value) }
      >
        -
      </button>
      <label htmlFor={ `${productId}` } className="Counter__label">
        <input
          id={ `${productId}` }
          data-testid={ `${userRole}_products__input-card-quantity-${productId}` }
          className="Counter__input"
          type="text"
          value={ quantity }
          onChange={ ({ target }) => handleChange(target.value) }
        />
      </label>
      <br />
      <br />
      <button
        className="Counter__button --right"
        type="button"
        value="+"
        data-testid={ `${userRole}_products__button-card-add-item-${productId}` }
        onClick={ ({ target }) => handleClick(target.value) }
      >
        +
      </button>
    </div>
  );
};

Counter.defaultProps = {
  price: 'R$ 0,00',
  productId: 0,
  description: '',
};

Counter.propTypes = {
  price: PropTypes.string,
  productId: PropTypes.number,
  description: PropTypes.string,
  setCart: PropTypes.func.isRequired,
};

export default Counter;
