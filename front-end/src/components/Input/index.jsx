import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Input({ className, dataTestId, inputLabel, placeholder, type, onChange }) {
  return (
    <div className="input-div">
      <p>{inputLabel}</p>
      <input
        className={ className }
        data-testid={ dataTestId }
        placeholder={ placeholder }
        onChange={ onChange }
        type={ type }
        autoComplete="true"
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
  onChange: PropTypes.func,
};

Input.defaultProps = {
  inputLabel: '',
  className: 'primary-button',
  dataTestId: '',
  type: 'text',
  placeholder: '',
  onChange: () => {},
};

export default Input;
