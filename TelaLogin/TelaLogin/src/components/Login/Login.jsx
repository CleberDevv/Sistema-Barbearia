import { FaUser, FaLock } from "react-icons/fa"
import { useState } from "react"
import "./Login.css";
import logoBarbearia from '../../assets/LOGO.png';
import tituloLogin from '../../assets/EFETUE SEU LOGIN.png';

const Login = ({ onLogin }) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmit = (event) => {
        event.preventDefault();

        alert("Enviando dados:" + username + " - " + password);

        onLogin();
    };


  return (
    <>
    <img src={logoBarbearia} alt="Sistema de Barbearia" className="logo-lateral" />

    <div className='container'>
      <form onSubmit={handleSubmit}>
        <img src={tituloLogin} alt="Efetue seu Login" className="titulo-login" />
        <div className="input-field">
            <input 
            type='email' 
            placeholder='E-mail' 
            onChange={(e) => setUsername(e.target.value)} />
            <FaUser className="icon" />
        </div >
        <div className="input-field">
            <input 
            type='password' 
            placeholder='Senha' 
            onChange={(e) => setPassword(e.target.value)} />
            <FaLock className="icon" />
        </div>

        <div className="recall-forget">
            <label>
                <input type="checkbox" />
                Lembre de mim
            </label>
            <a href="#">Esqueci a senha</a>
        </div>

        <button>Entrar</button>

        <div className="signup-link">
            <p>
            Não tenho conta <a href="#">Registrar</a>
            </p>
        </div>
      </form>
    </div>
    </>
  )
}

export default Login
