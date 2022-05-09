import React from 'react';
import PropTypes from 'prop-types';

function PriceBox({ inputInfo, dataTestId }) {
  return (
    <div className="value-box" data-testid={ dataTestId }>
      { inputInfo }
    </div>
  );
}

PriceBox.propTypes = {
  inputInfo: PropTypes.string.isRequired,
};

export default PriceBox;
