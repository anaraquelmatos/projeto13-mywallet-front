import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [habilitado, setHabilitado] = useState(false);
    const navigate = useNavigate();

    const accessLoginPage = (event) => {

        event.preventDefault();

        const URL = `http://localhost:9000/sign-up`;

        axios
            .post(URL, {
                name,
                email,
                password,
                passwordConfirmation
            })

            .then(() => {
                navigate("/");
            })
            .catch((err) => {
                alert(`Erro ${err.response.status}. Por favor, confira os dados inseridos!`);
                setHabilitado(false);
            })
    }

    return (
        <div className="sign-up">
            <h1>MyWallet</h1>
            <div className="form">
                <form onSubmit={accessLoginPage}>
                    <input type="text" placeholder="Nome" disable={habilitado} value={name} required onChange={(e) => setName(e.target.value)}></input>
                    <input type="email" placeholder="E-mail" disable={habilitado} value={email} required onChange={(e) => setEmail(e.target.value)}></input>
                    <input type="password" placeholder="Senha" pattern="[a-zA-Z0-9]{6,10}" title="Digite de 6 a 10 caracteres alfanuméricos." minLength="6" maxLength="10" disable={habilitado} value={password} required onChange={(e) => setPassword(e.target.value)}></input>
                    <input type="password" placeholder="Confirme a senha" pattern="[a-zA-Z0-9]{6,10}" title="Digite de 6 a 10 caracteres alfanuméricos." minLength="6" maxLength="10" disable={habilitado} value={passwordConfirmation} required onChange={(e) => setPasswordConfirmation(e.target.value)}></input>
                    <button type="submit" disable={habilitado}>Cadastrar</button>
                </form>
                <Link to={`/`}>
                    <p className="login">Já tem uma conta? Entre agora!</p>
                </Link>
            </div>
        </div>
    )
}
export default SignUp;