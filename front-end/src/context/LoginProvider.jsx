import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LoginContext from './LoginContext';

function LoginProvider({ children }) {
  const [email, setEmail] = useState({
    user: { email: '' },
  });

  const [password, setPassword] = useState({
    password: '',
  });

  const settingEmail = ({ target }) => {
    setEmail({
      user: { email: target.value },
    });
  };
  const settingPassword = ({ target }) => {
    setPassword({ password: target.value });
  };

  // const passwordMinLength = 6;
  // const size
  // const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  // const isValid = regex.test()
  // const enabled = isValid && size > passwordMinLength;

  const context = {
    email,
    setEmail,
    password,
    setPassword,
    settingEmail,
    settingPassword,
  };

  return (
    <LoginContext.Provider value={ context }>
      { children }
    </LoginContext.Provider>
  );
}

LoginProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default LoginProvider;
