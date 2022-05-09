import { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./style.css";
import UserContext from "../UserContext";
import Record from "../Record";

function Records() {

    const { user, info, setInfo } = useContext(UserContext);
    const [cont, setCont] = useState();
    const [name, setName] = useState();
    const [sumAll, setSumAll] = useState();

    useEffect(() => {
        const URL = `http://localhost:9000/records`;
        const config = {
            headers: { Authorization: `Bearer ${user.token}` }
        };

        axios.get(URL, config)
            .then((response) => {
                const { data } = response;
                setInfo([...data.list]);
                setCont(cont + 1);
                setName(data.name);
            });
    }, [cont]);

    /*
        useEffect(() => {
                let all = 0;
                info.forEach(k => {
                    if (k.operator) {
                        all += parseFloat(k.value);
                    } else {
                        all -= parseFloat(k.value);
                    }
                })
                setSumAll(all);
        }, [info]);*/

    return Object.values(info).length === 0 ? (
        <div className="containerRecord">
            <header>
                <div className="top">
                    <h1>Olá, {name}</h1>
                    <ion-icon name="exit-outline"></ion-icon>
                </div>
            </header>
            <main>
                <div className="description none">
                    <p className="p">Não há registros de <br></br> entrada ou saída</p>
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
                    <h1>Olá, {name}</h1>
                    <ion-icon name="exit-outline"></ion-icon>
                </div>
            </header>
            <main>
                <div className="description all-description">
                    <div className="contain">
                        {
                            info.map((i) => {
                                return (
                                    <Record key={i} description={i.description} value={i.value} day={i.day}
                                        operator={i.operator}
                                    />
                                );
                            })
                        }
                    </div>
                    <div className="sum">
                        <p>SALDO:</p>
                        <p>1234</p>
                    </div>
                    <div>
                    </div>
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

export default Records;