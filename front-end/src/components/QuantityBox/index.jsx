import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function QuantityBox({ inputInfo }) {
  return (
    <div className="quantity-box">
      { inputInfo }
    </div>
  );
}

QuantityBox.propTypes = {
  inputInfo: PropTypes.number.isRequired,
};

export default QuantityBox;
