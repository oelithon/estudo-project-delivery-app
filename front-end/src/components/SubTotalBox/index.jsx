import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function SubTotalBox({ inputInfo }) {
  return (
    <div className="subtotal-box">
      { inputInfo }
    </div>
  );
}

SubTotalBox.propTypes = {
  inputInfo: PropTypes.number.isRequired,
};

export default SubTotalBox;
