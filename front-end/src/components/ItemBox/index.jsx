import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

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
