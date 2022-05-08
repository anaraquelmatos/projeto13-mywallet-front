import { useState } from "react";
import "./style.css";

function ValueAddition() {

    const [valor, setValor] = useState("");
    const [descricao, setDescricao] = useState("");
    // eslint-disable-next-line
    const [habilitado, setHabilitado] = useState(false);

    return (

        <div className="containerValueAddition">
            <header>
                <h1>Nova entrada</h1>
            </header>
            <main>
                <form>
                    <input type="text" placeholder="Valor" disable={habilitado} pattern="/[1-9]\d{0,2}(?:\.\d{3})*,\d{2}/" value={valor} required onChange={(e) => setValor(e.target.value)}></input>
                    <input type="text" placeholder="Descrição" disable={habilitado} value={descricao} required onChange={(e) => setDescricao(e.target.value)}></input>
                    <button type="submit" disable={habilitado}>Salvar entrada</button>
                </form>
            </main>
        </div>
    );
}

export default ValueAddition;