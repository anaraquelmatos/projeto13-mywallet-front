import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../UserContext";
import "./style.css";

function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [habilitado, setHabilitado] = useState(false);
    const { setUser } = useContext(UserContext);

    const navigate = useNavigate();

    const acessMainPage = (event) => {

        event.preventDefault();

        const URL = `https://projeto-development.herokuapp.com/`;

        axios
            .post(URL, {
                email,
                password
            })

            .then((response) => {
                const { data } = response;
                setUser({ token: data });
                navigate("/records");
            })
            .catch((err) => {
                alert(` Usuário não existe ou credenciais erradas!`);
                setHabilitado(false);
            })

    }

    return (
        <main>
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
        </main>
    );
}

export default SignIn;