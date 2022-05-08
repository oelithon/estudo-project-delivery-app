import React from 'react';
import PropTypes from 'prop-types';

function SubTotalBox({ inputInfo }) {
  return (
    <div className="subtotal-box">
      { inputInfo }
    </div>
  );
}

SubTotalBox.propTypes = {
  inputInfo: PropTypes.string.isRequired,
};

export default SubTotalBox;
