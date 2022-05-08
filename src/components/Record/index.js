import { useEffect, useContext } from "react";
import axios from "axios";
import "./style.css";
import UserContext from "../UserContext";

function Record() {

    const { user, setUser} = useContext(UserContext);

    useEffect(() => {
        const URL = `http://localhost:9000/records`;
        const config = {
            headers: { Authorization: `Bearer ${user.token}` }
        };

        axios.get(URL, config)
            .then((response) => {
                const { data } = response;
                setUser({...data, token: user.token});
            });
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            <h1>Teste</h1>
        </div>
    );
}

export default Record;