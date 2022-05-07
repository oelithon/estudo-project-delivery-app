import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function TotalBox({ inputInfo }) {
  return (
    <div className="total-box">
      { `Total: ${inputInfo}` }
    </div>
  );
}

TotalBox.propTypes = {
  inputInfo: PropTypes.string.isRequired,
};

export default TotalBox;
