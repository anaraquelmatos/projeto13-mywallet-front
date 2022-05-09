import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.css";
import UserContext from "../UserContext";

function ValueAddition() {

    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");
    const [habilitado, setHabilitado] = useState(false);
    const navigate = useNavigate();

    const { user } = useContext(UserContext);

    const saveValue = (event) => {

        event.preventDefault();

        const URL = `http://localhost:9000/records`;

        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }

        axios
            .post(URL, {
                value,
                description,
                operator: true
            }, config)

            .then(() => {
                navigate("/records");
            })
            .catch((err) => {
                alert(`Erro ${err.response.status}. Insira os dados novamente!`);
                setHabilitado(false);
            })
    }

    return (

        <div className="containerValueAddition">
            <header>
                <h1>Nova entrada</h1>
            </header>
            <main>
                <form onSubmit={saveValue}>
                    <input type="number" placeholder="Valor" disable={habilitado} value={value} required onChange={(e) => setValue(e.target.value)}></input>
                    <input type="text" placeholder="Descrição" disable={habilitado} value={description} required onChange={(e) => setDescription(e.target.value)}></input>
                    <button type="submit" disable={habilitado}>Salvar entrada</button>
                </form>
            </main>
        </div>
    );
}

export default ValueAddition;