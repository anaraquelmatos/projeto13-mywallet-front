import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
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
                setInfo(data);
            });
    }, []);

    return info.records === null ? (
        <div className="containerRecord">
            <header>
                <div className="top">
                    <h1>Olá, {info.user.name}</h1>
                    <ion-icon name="exit-outline"></ion-icon>
                </div>
            </header>
            <main>
                <div className="description none">
                    <p>Não há registros de <br></br> entrada ou saída</p>
                </div>
                <div className="financialResources">
                    <Link to={`/add`}>
                        <div className="addValue">
                            <div className="operator">
                                <ion-icon name="add-circle-outline"></ion-icon>
                                <p>Nova entrada</p>
                            </div>
                        </div>
                    </Link>
                    <Link to={`/subtract`}>
                        <div className="subtractValue">
                            <div className="operator">
                                <ion-icon name="remove-circle-outline"></ion-icon>
                                <p>Nova saída</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </main>
        </div>
    ) : (
        <div className="containerRecord">
            <header>
                <div className="top">
                    <h1>Olá, {info.user}</h1>
                    <ion-icon name="exit-outline"></ion-icon>
                </div>
            </header>
            <main>
                <div className="description">
                    <p>Tem conteúdo</p>
                </div>
                <div className="financialResources">
                    <Link to={`/add`}>
                        <div className="addValue">
                            <div className="operator">
                                <ion-icon name="add-circle-outline"></ion-icon>
                                <p>Nova entrada</p>
                            </div>
                        </div>
                    </Link>
                    <Link to={`/subtract`}>
                        <div className="subtractValue">
                            <div className="operator">
                                <ion-icon name="remove-circle-outline"></ion-icon>
                                <p>Nova saída</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </main>
        </div>
    );
}

export default Record;