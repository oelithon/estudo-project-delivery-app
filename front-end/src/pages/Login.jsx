import React from 'react';
import { Button, Input } from '../components';
import logo from '../images/Zeca.png';
import '../styles/Login.css';
import '../styles/global.css';
// import LoginContext from '../context/LoginContext';

function Login() {
  // const { settingEmail, settingPassword } = useContext(LoginContext);

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
            // onChange={ () => settingEmail() }
            placeholder="email@trybeer.com.br"
          />
          <Input
            inputLabel="Senha"
            className="default"
            dataTestId="common_login__input-password"
            type="password"
            // onChange={ () => settingPassword() }
            placeholder="**********"
          />
          <Button
            path="/register"
            dataTestId="common_login__button-login"
            className="primary-button"
            buttonText="LOGIN"
          />
          <Button
            path="/register"
            dataTestId="common_login__button-register"
            className="tertiary-button"
            buttonText="Ainda não tenho conta"
          />
        </form>
      </main>
    </div>
  );
}

export default Login;
