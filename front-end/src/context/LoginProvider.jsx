import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LoginContext from './LoginContext';

function LoginProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [hidden, setHidden] = useState(false);

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
    setName({ password: target.value });
  };

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

  const handleLoginButton = () => {
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
      setHidden(true);
      console.log(hidden);
    } else {
      setLoading(false);
      console.log('Usuário encontrado!');
      setHidden(false);
      console.log(hidden);
    }
  };

  // A função abaixo foi desenvolvovida com a ajuda de: https://www.youtube.com/watch?v=efr1xbwFlKU

  const register = () => {
    const body = JSON.stringify({
      name: name.name,
      email: email.email,
      password: password.password,
      role: 'client',
    });

    const request = new XMLHttpRequest();

    request.open('POST', 'http://localhost:3001/users', true);

    request.setRequestHeader('Content-type', 'application/json');

    request.send(body);

    return body;
  };

  const handleRegisterButton = () => {
    if (enabled === true) {
      const result = register();
      console.log('Usuário cadastrado com sucesso!');
      setHidden(false);
      return result;
    }
    setHidden(true);
  };

  const context = {
    loading,
    hidden,
    setHidden,
    enabled,
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    settingName,
    settingEmail,
    settingPassword,
    getAll,
    handleLoginButton,
    handleRegisterButton,
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
