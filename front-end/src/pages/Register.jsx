import React from 'react';
import Input from '../components/input/Input';
import Button from '../components/button/Button';
import '../styles/Login.css';

function Register() {
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
            data-testid="common_register__input-name"
            type="text"
            placeholder="Seu nome"
          />
          <Input
            inputLabel="E-mail"
            className="default"
            data-testid="common_register__input-email"
            type="text"
            placeholder="Seu e-mail"
          />
          <Input
            inputLabel="Senha"
            className="default"
            data-testid="common_register__input-password"
            type="password"
            placeholder="**********"
          />
          <Button
            path="/"
            data-testid="common_login__button-login"
            className="primary-button"
            buttonText="CADASTRAR"
          />
        </form>
      </main>
    </div>
  );
}

export default Register;
