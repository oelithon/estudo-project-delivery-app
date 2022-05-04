import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LoginContext from './LoginContext';

function LoginProvider({ children }) {
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState({
    email: '',
  });

  const [password, setPassword] = useState({
    password: '',
  });

  const settingEmail = ({ target }) => {
    setEmail({
      email: target.value,
    });
  };

  const settingPassword = ({ target }) => {
    setPassword({ password: target.value });
  };

  const passwordMinLength = 6;
  const passwordSize = password.password.length;
  const regex = /\S+@\S+\.\S+/;
  const isValidEmail = regex.test(email.email);
  const enabled = isValidEmail && passwordSize >= passwordMinLength;

  const getAll = () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'http://localhost:3001/users', false);

    request.setRequestHeader('Content-type', 'application/json');

    request.send();

    return JSON.parse(request.response);
  };

  const handleClick = () => {
    setLoading(true);
    const userEmail = email.email;
    const userPassword = password.password;
    const arrayOfUsers = getAll();
    const findUser = arrayOfUsers.find(
      (user) => user.email === userEmail && user.password === userPassword,
    );
    if (findUser === undefined) {
      setLoading(false);
      console.log('Usuário não encontrado...');
    } else {
      setLoading(false);
      console.log('Usuário encontrado!');
    }
  };

  const context = {
    loading,
    enabled,
    email,
    setEmail,
    password,
    setPassword,
    settingEmail,
    settingPassword,
    getAll,
    handleClick,
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
