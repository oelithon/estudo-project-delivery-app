import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { addProduct, removeProduct } from '../../helpers/localStorage';
import './style.css';

const Counter = ({ productId, price }) => {
  const [quantity, setQuantity] = useState(0);

  const handleClick = (value) => {
    if (value === '+') {
      setQuantity((prevQuantity) => prevQuantity + 1);
      addProduct({ productId, price });
    } else if (value === '-' && quantity === 0) {
      console.log('0 é o mínimo');
    } else {
      setQuantity((prevQuantity) => prevQuantity - 1);
      removeProduct({ productId, price });
    }
  };

  const handleChange = (value) => {
    setQuantity(parseInt(value, 10));
  };

  useEffect(() => {
    if (Number.isNaN(quantity)) setQuantity(0);
  }, [quantity]);

  return (
    <div className="Counter__div">
      <button
        className="Counter__button --left"
        data-testid="19"
        type="button"
        value="-"
        onClick={ ({ target }) => handleClick(target.value) }
      >
        -
      </button>
      <label htmlFor="Counter-input" className="Counter__label">
        <input
          id="Counter-input"
          data-testid="20"
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
        data-testid="18"
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
};

Counter.propTypes = {
  price: PropTypes.string,
  productId: PropTypes.number,
};

export default Counter;
