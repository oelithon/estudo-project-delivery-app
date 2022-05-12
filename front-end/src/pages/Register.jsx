import React, { useContext, useEffect } from 'react';
import { Button, HiddenElement, Input } from '../components';
import LoginContext from '../context/LoginContext';
import '../styles/Login.css';

function Register() {
  const {
    hidden,
    enabledToRegister,
    setHidden,
    setEmail,
    setPassword,
    settingName,
    settingEmail,
    settingPassword,
    handleRegisterButton } = useContext(LoginContext);

  useEffect(() => {
    console.error('Verificar useEffect da tela de Registro');
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

  const id = "common_register__element-invalid_register"

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
            buttonStatus={ !enabledToRegister }
          />
          common_register__element-invalid_register
        </form>
        { hidden
          ? <span data-testid={ id } className="hidden">Login ou senha inválidos</span>
          : '' }
      </main>
    </div>
  );
}

export default Register;
