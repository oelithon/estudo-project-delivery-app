import React from 'react';
import PropTypes from 'prop-types';

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
