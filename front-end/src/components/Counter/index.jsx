import React, { useEffect, useState } from 'react';
import './style.css';

const Counter = () => {
  const [quantity, setQuantity] = useState(0);
  const handleClick = (value) => {
    if (value === '+') setQuantity((prevQuantity) => prevQuantity + 1);
    else if (value === '-' && quantity === 0) console.log('0 é o mínimo');
    else setQuantity((prevQuantity) => prevQuantity - 1);
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
        type="button"
        value="-"
        onClick={ ({ target }) => handleClick(target.value) }
      >
        -
      </button>
      <label htmlFor="Counter-input" className="Counter__label">
        <input
          id="Counter-input"
          className="Counter__input"
          type="number"
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
        onClick={ ({ target }) => handleClick(target.value) }
      >
        +
      </button>
    </div>
  );
};

export default Counter;
