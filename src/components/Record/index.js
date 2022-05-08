import { useEffect, useContext } from "react";
import axios from "axios";
import "./style.css";
import UserContext from "../UserContext";

function Record() {

    const { user, setUser, info, setInfo } = useContext(UserContext);

    useEffect(() => {
        const URL = `http://localhost:9000/records`;
        const config = {
            headers: { Authorization: `Bearer ${user.token}` }
        };

        axios.get(URL, config)
            .then((response) => {
                const { data } = response;
                setUser({ ...data, token: user.token });
                console.log(data);
                setInfo(data);
            });
        // eslint-disable-next-line
    }, []);

    return info.records === null ? (
        <main>
            <div className="container">
                <div className="top">
                    <h1>Olá, {info.user.name}</h1>
                    <ion-icon name="exit-outline"></ion-icon>
                </div>
                <div className="description none">
                    <p>Não há registros de <br></br> entrada ou saída</p>
                </div>
                <div className="financialResources">
                    <div className="addValue">
                        <div className="operator">
                            <ion-icon name="add-circle-outline"></ion-icon>
                            <p>Nova entrada</p>
                        </div>
                    </div>
                    <div className="subtractValue">
                        <div className="operator">
                            <ion-icon name="remove-circle-outline"></ion-icon>
                            <p>Nova saída</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    ) : (
        <main>
            <div className="container">
                <div className="top">
                    <h1>Olá, {info.user}</h1>
                    <ion-icon name="exit-outline"></ion-icon>
                </div>
                <div className="description">
                    <p>Tem conteúdo</p>
                </div>
                <div className="financialResources">
                    <div className="addValue">
                        <div className="operator">
                            <ion-icon name="add-circle-outline"></ion-icon>
                            <p>Nova entrada</p>
                        </div>
                    </div>
                    <div className="subtractValue">
                        <div className="operator">
                            <ion-icon name="remove-circle-outline"></ion-icon>
                            <p>Nova saída</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Record;