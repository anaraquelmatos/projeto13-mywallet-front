import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "../UserContext";
import SignUp from "../SignUp";
import SignIn from "../SignIn";
import Record from "../Record";

function App() {

    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/records" element={<Record />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;