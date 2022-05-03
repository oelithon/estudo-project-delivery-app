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

Input.propTypes = {
  inputLabel: PropTypes.string,
  className: PropTypes.string,
  dataTestId: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  inputLabel: '',
  className: 'primary-button',
  dataTestId: '',
  type: 'text',
  placeholder: '',
};

export default Input;
