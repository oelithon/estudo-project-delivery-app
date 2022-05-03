import React from 'react';
import { Button, Input } from '../components';
import logo from '../images/Zeca.png';
import '../styles/Login.css';
import '../styles/global.css';

function Login() {
  // const [email, setEmail] = useState({
  //   user: { email: '' },
  // });

  // const [password, setPassword] = useState({
  //   password: '',
  // });

  // const settingEmail = ({ target }) => {
  //   setEmail({
  //     user: { email: target.value },
  //   });
  // };
  // const settingPassword = ({ target }) => {
  //   setPassword({ password: target.value });
  // };
  // const passwordMinLength = 6;
  // const size
  // const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  // const isValid = regex.test()
  // const enabled = isValid && size > passwordMinLength;

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
            onChange={ settingEmail }
            placeholder="email@trybeer.com.br"
          />
          <Input
            inputLabel="Senha"
            className="default"
            dataTestId="common_login__input-password"
            type="password"
            onChange={ settingPassword }
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
