import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "../UserContext";
import SignUp from "../SignUp";
import SignIn from "../SignIn";
import Record from "../Record";
import ValueAddition from "../ValueAddition";

function App() {

    const [user, setUser] = useState(null);
    const [info, setInfo] = useState({});

    return (
        <UserContext.Provider value={{ user, setUser,info, setInfo}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/records" element={<Record />} />
                    <Route path="/add" element={<ValueAddition />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;