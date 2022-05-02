import React from 'react';
import '.';

function PrimaryButton() {

  const handleClick = () => {

  };

  return (
    <div>
      <button
        data-testid="common_login__button-login"
        className="Primary-button" // antigo "login-button"
        type="button"
        onClick={ handleClick }
        >
        { this.props.buttonText }
      </button>
    </div>
  );
}

export default PrimaryButton;