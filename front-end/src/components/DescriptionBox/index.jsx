import React from 'react';
import PropTypes from 'prop-types';

function DescriptionBox({ inputInfo }) {
  return (
    <div className="description-box">
      { inputInfo }
    </div>
  );
}

DescriptionBox.propTypes = {
  inputInfo: PropTypes.string.isRequired,
};

export default DescriptionBox;
