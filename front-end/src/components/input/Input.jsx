import React from 'react';
import './Input.css';

function Input({ className, dataTestId, inputLabel, placeholder, type }) {
  const handleChange = ({ target }) => {
    console.log(target.value);
  };

  return (
    <div className="input-div">
      <p>{inputLabel}</p>
      <input
        className={ className }
        data-testid={ dataTestId }
        placeholder={ placeholder }
        onChange={ handleChange }
        type={ type }
      />
    </div>
  );
}

export default Input;
