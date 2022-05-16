import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input } from '../components';
import logo from '../images/Zeca.png';
import '../styles/Login.css';
import '../styles/global.css';
import LoginContext from '../context/LoginContext';

function Login() {
  const { hidden,
    setHidden,
    setEmail,
    handleLoginButton,
    loading,
    setPassword,
    settingEmail,
    settingPassword,
    enabledToLogin } = useContext(LoginContext);

  const navigate = useNavigate();

  const verifyUser = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user !== null) {
      switch (user.role) {
      case 'seller':
        navigate('/seller/orders');
        break;
      case 'customer':
        navigate('/customer/products');
        break;
      default:
        navigate('/login');
        break;
      }
    }
  };

  useEffect(() => {
    verifyUser();
  }, []);

  useEffect(() => {
    console.error('Verificar useEffect da tela de Login');
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

  const id = 'common_login__element-invalid-email';

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
            onChange={ (event) => settingEmail(event) }
            placeholder="email@trybeer.com.br"
          />
          <Input
            inputLabel="Senha"
            className="default"
            dataTestId="common_login__input-password"
            type="password"
            onChange={ (event) => settingPassword(event) }
            placeholder="**********"
          />
          <Button
            path=""
            dataTestId="common_login__button-login"
            className="primary-button"
            buttonText="LOGIN"
            buttonStatus={ !enabledToLogin }
            onClick={ handleLoginButton }
          />
          <Button
            path="/register"
            dataTestId="common_login__button-register"
            className="tertiary-button"
            buttonText="Ainda não tenho conta"
          />
        </form>
        { loading ? 'Loading...' : ''}
        { hidden
          ? <span data-testid={ id } className="hidden">Login ou senha inválidos</span>
          : '' }
      </main>
    </div>
  );
}

export default Login;
