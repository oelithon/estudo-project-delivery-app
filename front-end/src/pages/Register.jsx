import React, { useContext } from 'react';
import { Button, HiddenElement, Input } from '../components';
import LoginContext from '../context/LoginContext';
import '../styles/Login.css';

function Register() {
  const {
    hidden,
    settingName,
    settingEmail,
    settingPassword,
    handleRegisterButton } = useContext(LoginContext);

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
            dataTestId="common_register__button-register"
            className="primary-button"
            buttonText="CADASTRAR"
            onClick={ handleRegisterButton }
          />
        </form>
        { hidden
          ? <HiddenElement dataTestId="common_register__element-invalid_register" />
          : '' }
      </main>
    </div>
  );
}

export default Register;
