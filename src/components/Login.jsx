import logo from "../assets/logo.png";
import "../global.css";
import { useNavigate } from 'react-router-dom';


function Login() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/home');
    }

    return (
        <div className="container">
            <header className="header">
                <img src={logo} alt="Kognit" />
            </header>
            <form>
                <div className="inputContainer">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" id="email" placeholder="Insira seu e-mail" />
                </div>
                <div className="inputContainer">
                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" id="password" placeholder="Insira sua senha" />
                </div>
                <a href="">Esqueceu sua senha?</a>
                <button onClick={handleClick} className="button">
                    FAZER LOGIN
                </button>
            </form>
        </div>
    );
}

export default Login;
