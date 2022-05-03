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

  const passwordMinLength = 6;
  const passwordSize = password.password.length;
  const regex = /\S+@\S+\.\S+/;
  const isValidEmail = regex.test(email.user.email);

  const enabled = isValidEmail && passwordSize >= passwordMinLength;

  const context = {
    enabled,
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
