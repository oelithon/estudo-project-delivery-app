import React from 'react';
import PropTypes from 'prop-types';

function ItemBox({ inputInfo, dataTestId }) {
  return (
    <div className="item-box" data-testid={ dataTestId }>
      { inputInfo }
    </div>
  );
}

ItemBox.propTypes = {
  inputInfo: PropTypes.number.isRequired,
  dataTestId: PropTypes.string,
};

ItemBox.defaultProps = {
  dataTestId: '',
};

export default ItemBox;
