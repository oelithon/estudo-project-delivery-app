import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoginContext from './LoginContext';

function LoginProvider({ children }) {
  const navigate = useNavigate();
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

  const login = async () => {
    const body = JSON.stringify({
      email: email.email,
      password: password.password,
    });

    const response = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    })
      .then((res) => res.json());

    return response;
  };

  const register = () => {
    const body = JSON.stringify({
      name: name.name,
      email: email.email,
      password: password.password,
    });

    const response = fetch('http://localhost:3001/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    }).then((res) => res.json());

    return response;
  };

  const verifyData = (data) => {
    if (data.token === undefined) {
      setLoading(false);
      setHidden(true);
    } else {
      setLoading(false);
      localStorage.setItem('customer', JSON.stringify({
        name: data.name,
        email: data.email,
        role: data.role,
        token: data.token,
      }));
      setHidden(false);
      navigate('/customer/products');
    }
  };

  const handleLoginButton = async () => {
    setLoading(true);
    const data = await login();
    verifyData(data);
  };

  const handleRegisterButton = async () => {
    if (enabledToRegister === true) {
      const data = await register();
      verifyData(data);
      console.log(data);
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
