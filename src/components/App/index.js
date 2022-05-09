import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "../UserContext";
import SignUp from "../SignUp";
import SignIn from "../SignIn";
import Records from "../Records";
import ValueAddition from "../ValueAddition";
import ValueSubctration from "../ValueSubtraction";

function App() {

    const [user, setUser] = useState(null);
    const [info, setInfo] = useState({});

    return (
        <UserContext.Provider value={{ user, setUser, info, setInfo}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/records" element={<Records />} />
                    <Route path="/add" element={<ValueAddition />} />
                    <Route path="/subtract" element={<ValueSubctration />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;