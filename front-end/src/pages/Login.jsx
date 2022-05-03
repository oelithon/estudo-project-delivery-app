import React from 'react';
import logo from '../images/Zeca.png';
import '../styles/Login.css';
import Button from '../components/button/Button';
import Input from '../components/input/Input';

function Login() {
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
            data-testid="common_login__input-email"
            type="text"
            placeholder="email@trybeer.com.br"
          />
          <Input
            inputLabel="Senha"
            className="default"
            data-testid="common_login__input-password"
            type="password"
            placeholder="**********"
          />
          <Button
            path="/subscribe"
            data-testid="common_login__button-login"
            className="primary-button"
            buttonText="LOGIN"
          />
          <Button
            path="/subscribe"
            data-testid="common_login__button-register"
            className="tertiary-button"
            buttonText="Ainda não tenho conta"
          />
        </form>
      </main>
    </div>
  );
}

export default Login;
