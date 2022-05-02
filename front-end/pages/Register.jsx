import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";


function Register() {

  const history = useHistory();

  const handleRegisterClick = () => {
    console.log('Clicou no botão de Login!')
    history.push('/');
  }

  const handleEmailChange = (event) => {
    console.log(event.target.value)
  }

  const handlePasswordChange = () => {
    console.log('Alterou o input de Password!')
  }

  return (
  <div>
    <main className="Login-main">
        <h3 className="App-name">
          Cadastro
        </h3>
        <form className="Login-form">
          <p className="Login-label">
            Nome
          </p>
          <input
            data-testid="common_register__input-name"
            type="text"
            placeholder="Seu nome"
          />
          <p className="Login-label">
            E-mail
          </p>
          <input
            data-testid="common_register__input-email"
            type="text"
            placeholder="Seu nome"
            onChange={handleEmailChange}
          />
          <p className="Login-label">
            Senha
          </p>
          <input
            data-testid="common_register__input-password"
            type="password"
            placeholder="***********"
            onChange={handlePasswordChange}
          />
          <Link to='/' >
          <button
            data-testid="common_login__button-login"
            className="Login-button"
            type="button"
            onClick={handleRegisterClick}
          >
            CADASTRAR
          </button>
          </Link>
        </form>
      </main>
  </div>
  )
}

export default Register;