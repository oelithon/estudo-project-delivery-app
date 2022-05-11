import React from 'react';
import PropTypes from 'prop-types';

function Select({ optionValue, dataTestId }) {
  return (
    <div className="select" data-testid={ dataTestId }>
      <select>
        <option value={ optionValue }>{optionValue}</option>
      </select>
    </div>
  );
}

Select.propTypes = {
  optionValue: PropTypes.string.isRequired,
  dataTestId: PropTypes.string,
};

Select.defaultProps = {
  dataTestId: '',
};

export default Select;
