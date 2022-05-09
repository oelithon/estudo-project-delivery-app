import React from 'react';
import PropTypes from 'prop-types';

function QuantityBox({ inputInfo, dataTestId }) {
  return (
    <div className="quantity-box" data-testid={ dataTestId }>
      { inputInfo }
    </div>
  );
}

QuantityBox.propTypes = {
  inputInfo: PropTypes.number.isRequired,
};

export default QuantityBox;
