import React, { useContext, useEffect } from 'react';
import { Button, Input } from '../components';
import logo from '../images/Zeca.png';
import '../styles/Login.css';
import '../styles/global.css';
import LoginContext from '../context/LoginContext';

function Login() {
  const { setEmail, handleClick, loading,
    setPassword, settingEmail, settingPassword, enabled } = useContext(LoginContext);

  useEffect(() => {
    console.error('Verificar useEffect da tela de Login');
    return () => {
      setEmail({
        email: '',
      });
      setPassword({
        password: '',
      });
    };
  }, [setEmail, setPassword]);
  return (
    <div>
      <main className="Login-main">
        <img src={ logo } className="Login-logo" alt="logo" />
        <h3 className="App-name">
          Zeca Delivery!
        </h3>
        <form className="Login-form">
          <Input
            inputLabel="Login"
            className="default"
            dataTestId="common_login__input-email"
            type="text"
            onChange={ (event) => settingEmail(event) }
            placeholder="email@trybeer.com.br"
          />
          <Input
            inputLabel="Senha"
            className="default"
            dataTestId="common_login__input-password"
            type="password"
            onChange={ (event) => settingPassword(event) }
            placeholder="**********"
          />
          <Button
            path=""
            dataTestId="common_login__button-login"
            className="primary-button"
            buttonText="LOGIN"
            buttonStatus={ !enabled }
            onClick={ handleClick }
          />
          <Button
            path="/register"
            dataTestId="common_login__button-register"
            className="tertiary-button"
            buttonText="Ainda não tenho conta"
          />
        </form>
        <span className="loading">
          { loading ? 'Loading...' : '' }
        </span>
      </main>
    </div>
  );
}

export default Login;
