import React from 'react';
import { Button, Input } from '../components';
import '../styles/Login.css';

function Register() {
  const handleClick = () => {
    console.log('clicou');
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
            placeholder="Seu nome"
          />
          <Input
            inputLabel="E-mail"
            className="default"
            dataTestId="common_register__input-email"
            type="text"
            placeholder="Seu e-mail"
          />
          <Input
            inputLabel="Senha"
            className="default"
            dataTestId="common_register__input-password"
            type="password"
            placeholder="**********"
          />
          <Button
            path="/login"
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
