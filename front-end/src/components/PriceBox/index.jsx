import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

function PriceBox({ inputInfo }) {
  return (
    <div className="value-box">
      { inputInfo }
    </div>
  );
}

PriceBox.propTypes = {
  inputInfo: PropTypes.number.isRequired,
};

export default PriceBox;
