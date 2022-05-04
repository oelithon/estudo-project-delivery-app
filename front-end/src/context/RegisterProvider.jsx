import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RegisterContext from './RegisterContext';

function RegisterProvider({ children }) {
  const [name, setName] = useState({
    name: '',
  });

  const [email, setEmail] = useState({
    email: '',
  });

  const [password, setPassword] = useState({
    password: '',
  });

  const settingName = ({ target }) => {
    setName({ name: target.value });
  };

  const settingEmail = ({ target }) => {
    setEmail({ email: target.value });
  };

  const settingPassword = ({ target }) => {
    setPassword({ password: target.value });
  };

  const context = {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    settingName,
    settingEmail,
    settingPassword,
  };

  return (
    <RegisterContext.Provider value={ context }>
      { children }
    </RegisterContext.Provider>
  );
}

RegisterProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default RegisterProvider;
