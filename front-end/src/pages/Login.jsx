import React from 'react';
import logo from '../images/Zeca.png';
import '../styles/Login.css';
import Button from '../components/button/Button';

function Login() {
  const handleEmailChange = (event) => {
    console.log(event.target.value);
  };

  const handlePasswordChange = () => {
    console.log('Alterou o input de Password!');
  };

  return (
    <div className="Login-div">
      <main className="Login-main">
        <img src={ logo } className="Login-logo" alt="logo" />
        <h3 className="App-name">
          Zeca Delivery!
        </h3>
        <form className="Login-form">
          <p className="Login-label">
            Login
          </p>
          <input
            data-testid="common_login__input-email"
            type="text"
            placeholder="email@trybeer.com.br"
            onChange={ handleEmailChange }
          />
          <p className="Login-label">
            Senha
          </p>
          <input
            data-testid="common_login__input-password"
            type="password"
            placeholder="***********"
            onChange={ handlePasswordChange }
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
