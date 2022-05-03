import React from 'react';
import { Link } from 'react-router-dom'
import './Button.css';

function Button({ path, className, dataTestId, buttonText }) {
  return (
    <Link to={ path }>
      <button
        className={ className }
        data-testid={ dataTestId }
        type="button"
      >
        { buttonText }
      </button>
    </Link>
  );
}

export default Button;
