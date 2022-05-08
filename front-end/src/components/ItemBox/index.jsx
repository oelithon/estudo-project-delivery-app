import React from 'react';
import PropTypes from 'prop-types';

function ItemBox({ inputInfo }) {
  return (
    <div className="item-box">
      { inputInfo }
    </div>
  );
}

ItemBox.propTypes = {
  inputInfo: PropTypes.number.isRequired,
};

export default ItemBox;
