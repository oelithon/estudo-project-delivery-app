import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css';

function Button({ path, className, dataTestId, buttonText, onClick }) {
  return (
    <Link to={ path }>
      <button
        className={ className }
        data-testid={ dataTestId }
        type="button"
        onClick={ onClick }
      >
        { buttonText }
      </button>
    </Link>
  );
}

Button.propTypes = {
  path: PropTypes.string,
  className: PropTypes.string,
  dataTestId: PropTypes.string,
  onClick: PropTypes.func,
  buttonText: PropTypes.string,
};

Button.defaultProps = {
  path: '/',
  className: 'primary-button',
  dataTestId: '',
  onClick: () => {},
  buttonText: 'LOGIN',
};

export default Button;
