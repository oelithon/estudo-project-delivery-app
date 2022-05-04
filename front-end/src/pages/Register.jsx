import React, { useContext } from 'react';
import { Button, Input } from '../components';
import RegisterContext from '../context/RegisterContext';
import '../styles/Login.css';

function Register() {
  const {
    name,
    email,
    password,
    settingName,
    settingEmail,
    settingPassword } = useContext(RegisterContext);

  // A função abaixo foi desenvolvovida com a ajuda de: https://www.youtube.com/watch?v=efr1xbwFlKU

  const handleClick = async () => {
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

    request.onload = function() {
      console.log(this.responseText);
    };

    return request.responseText;
  };

  return (
    <div>
      <main className="Login-main">
        <h3 className="App-name">
          Cadastro
        </h3>
        <form className="Login-form">
          <Input
            inputLabel="Nome"
            className="default"
            dataTestId="common_register__input-name"
            type="text"
            onChange={ (event) => settingName(event) }
            placeholder="Seu nome"
          />
          <Input
            inputLabel="E-mail"
            className="default"
            dataTestId="common_register__input-email"
            type="text"
            onChange={ (event) => settingEmail(event) }
            placeholder="Seu e-mail"
          />
          <Input
            inputLabel="Senha"
            className="default"
            dataTestId="common_register__input-password"
            type="password"
            onChange={ (event) => settingPassword(event) }
            placeholder="**********"
          />
          <Button
            path=""
            dataTestId="common_login__button-login"
            className="primary-button"
            buttonText="CADASTRAR"
            onClick={ handleClick }
          />
        </form>
      </main>
    </div>
  );
}

export default Register;
