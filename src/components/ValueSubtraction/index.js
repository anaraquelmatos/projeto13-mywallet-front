import { useState } from "react";
import "./style.css";

function ValueAddition() {

    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");
    const [habilitado, setHabilitado] = useState(false);

    return (

        <div className="containerValueAddition">
            <header>
                <h1>Nova entrada</h1>
            </header>
            <main>
                <form>
                    <input type="text" placeholder="Valor" disable={habilitado} pattern="[0-9]+\.[0-9]{2}" title="Digite apenas números e separe-os por ponto. Ex.: 12.00" value={value} required onChange={(e) => setValue(e.target.value)}></input>
                    <input type="text" placeholder="Descrição" disable={habilitado} value={description} required onChange={(e) => setDescription(e.target.value)}></input>
                    <button type="submit" disable={habilitado}>Salvar saída</button>
                </form>
            </main>
        </div>
    );
}

export default ValueAddition;