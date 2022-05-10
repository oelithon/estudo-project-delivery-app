import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LoginContext from './LoginContext';

function LoginProvider({ children }) {
  const [products, setProducts] = useState([]);
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

  const [address, setAddress] = useState({
    address: '',
  });

  const [number, setNumber] = useState({
    number: '',
  });

  const settingName = ({ target }) => {
    setName({ name: target.value });
  };

  const settingEmail = ({ target }) => {
    setEmail({
      email: target.value,
    });
  };

  const settingPassword = ({ target }) => {
    setPassword({ password: target.value });
  };

  const settingAddress = ({ target }) => {
    setAddress({ address: target.value });
  };

  const settingNumber = ({ target }) => {
    setNumber({ number: target.value });
  };

  const passwordMinLength = 6;
  const passwordSize = password.password.length;
  const regex = /\S+@\S+\.\S+/;
  const isValidEmail = regex.test(email.email);
  const nameMinLength = 12;
  const nameSize = name.name.length;
  const enabledToLogin = isValidEmail && passwordSize >= passwordMinLength;
  const enabledToRegister = isValidEmail
    && passwordSize >= passwordMinLength && nameSize >= nameMinLength;

  const getAll = async () => {
    const response = await fetch('http://localhost:3001/users')
      .then((res) => res.json())
      .then((data) => data);

    return response;
  };

  const handleLoginButton = async () => {
    setLoading(true);
    const userEmail = email.email;
    const userPassword = password.password;
    const arrayOfUsers = await getAll();
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

  const register = () => {
    const body = JSON.stringify({
      name: name.name,
      email: email.email,
      password: password.password,
      role: 'client',
    });

    const response = fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    }).then((res) => res.json());

    return response;
  };

  const handleRegisterButton = () => {
    if (enabledToRegister === true) {
      const result = register();
      console.log('Usuário cadastrado com sucesso!');
      setHidden(false);
      return result;
    }
    setHidden(true);
  };

  function currency(value, coin) {
    const fixedValue = value.toFixed(2);
    const modifiedValue = fixedValue.replace('.', ',');
    const newCurrency = `${coin} ${modifiedValue}`;
    return newCurrency;
  }

  const context = {
    products,
    setProducts,
    address,
    setAddress,
    number,
    setNumber,
    currency,
    loading,
    hidden,
    setHidden,
    enabledToLogin,
    enabledToRegister,
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    settingName,
    settingEmail,
    settingPassword,
    settingAddress,
    settingNumber,
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
