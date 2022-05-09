import React from 'react';
import PropTypes from 'prop-types';

function DescriptionBox({ inputInfo, dataTestId }) {
  return (
    <div className="description-box" data-testid={ dataTestId }>
      { inputInfo }
    </div>
  );
}

DescriptionBox.propTypes = {
  inputInfo: PropTypes.string.isRequired,
};

export default DescriptionBox;
