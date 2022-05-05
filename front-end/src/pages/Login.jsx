import React, { useContext, useEffect } from 'react';
import { Button, Input, HiddenElement } from '../components';
import logo from '../images/Zeca.png';
import '../styles/Login.css';
import '../styles/global.css';
import LoginContext from '../context/LoginContext';

function Login() {
  const { hidden, setHidden, setEmail, handleLoginButton, loading,
    setPassword, settingEmail, settingPassword, enabled } = useContext(LoginContext);

  useEffect(() => {
    console.error('Verificar useEffect da tela de Login');
    return () => {
      setHidden(false);
      setEmail({
        email: '',
      });
      setPassword({
        password: '',
      });
    };
  }, [setHidden, setEmail, setPassword]);
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
            onClick={ handleLoginButton }
          />
          <Button
            path="/register"
            dataTestId="common_login__button-register"
            className="tertiary-button"
            buttonText="Ainda não tenho conta"
          />
        </form>
        { loading ? 'Loading...' : ''}
        { hidden
          ? <HiddenElement dataTestId="common_login__element-invalid-email" />
          : '' }
      </main>
    </div>
  );
}

export default Login;
