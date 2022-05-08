import React from 'react';
import PropTypes from 'prop-types';

function PriceBox({ inputInfo }) {
  return (
    <div className="value-box">
      { inputInfo }
    </div>
  );
}

PriceBox.propTypes = {
  inputInfo: PropTypes.string.isRequired,
};

export default PriceBox;
