import React from 'react';
import './style.css';

function HiddenElement(dataTestId) {
  return (
    <span data-testid={ dataTestId } className="hidden-element">
      Login ou senha inválidos
    </span>
  );
}

export default HiddenElement;
