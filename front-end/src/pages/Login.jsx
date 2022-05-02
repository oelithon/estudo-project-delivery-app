import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../images/Zeca.png';
import '../styles/Login.css';

function Login() {
  const history = useHistory();

  const handleLoginClick = () => {
    console.log('Clicou no botão de Login!');
    history.push('/subscribe');
  };

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
          <button
            data-testid="common_login__button-login"
            className="Login-button"
            type="button"
            onClick={ handleLoginClick }
          >
            LOGIN
          </button>
          <Link to="/subscribe">
            <button
              data-testeid="common_login__button-register"
              className="Register-button"
              type="button"
            >
              Ainda não tenho conta
            </button>
          </Link>
        </form>
      </main>
    </div>
  );
}

export default Login;
