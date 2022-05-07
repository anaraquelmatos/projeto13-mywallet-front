import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "../UserContext";
import SignUp from "../SignUp";
import SignIn from "../SignIn";

function App() {

    const [token, setToken] = useState(null);

    return (
        <UserContext.Provider value={{ token, setToken }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/sign-up" element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;