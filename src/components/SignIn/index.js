import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [habilitado, setHabilitado] = useState(false);

    const navigate = useNavigate();

    const acessMainPage = (event) => {

        event.preventDefault();

        const URL = `http://localhost:9000/`;

        axios
            .post(URL, {
                email,
                password
            })

            .then(() => {
                navigate("/records");
            })
            .catch((err) => {
                alert(`Erro ${err.response.status}. Usuário não existe ou credenciais erradas!`);
                setHabilitado(false);
            })

    }

    return (
        <div className="sign-in">
            <h1>MyWallet</h1>
            <div className="form">
                <form onSubmit={acessMainPage}>
                    <input type="email" placeholder="E-mail" disable={habilitado} value={email} required onChange={(e) => setEmail(e.target.value)}></input>
                    <input type="password" placeholder="Senha" pattern="[a-zA-Z0-9]{6,10}" title="Digite de 6 a 10 caracteres alfanuméricos." minLength="6" maxLength="10" disable={habilitado} value={password} required onChange={(e) => setPassword(e.target.value)}></input>
                    <button disable={habilitado}>Entrar</button>
                </form>
                <Link to={`/sign-up`}>
                    <p>Primeira vez? Cadastre-se!</p>
                </Link>
            </div>
        </div>
    );
}

export default SignIn;