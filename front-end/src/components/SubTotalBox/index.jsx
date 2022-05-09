import React from 'react';
import PropTypes from 'prop-types';

function SubTotalBox({ inputInfo, dataTestId }) {
  return (
    <div className="subtotal-box" data-testid={ dataTestId }>
      { inputInfo }
    </div>
  );
}

SubTotalBox.propTypes = {
  inputInfo: PropTypes.string.isRequired,
};

export default SubTotalBox;
