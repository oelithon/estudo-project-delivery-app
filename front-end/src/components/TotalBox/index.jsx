import React from 'react';
import PropTypes from 'prop-types';

function TotalBox({ inputInfo, dataTestId }) {
  return (
    <div className="total-box" data-testid={ dataTestId }>
      { `Total: ${inputInfo}` }
    </div>
  );
}

TotalBox.propTypes = {
  inputInfo: PropTypes.string.isRequired,
};

export default TotalBox;
