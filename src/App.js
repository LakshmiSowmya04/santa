import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Send from "./components/Send";
import { useState } from "react";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Router>
            <Routes>
                <Route 
                    path="/" 
                    element={<Login setIsLoggedIn={setIsLoggedIn} />} 
                />
                <Route 
                    path="/signup" 
                    element={<Signup setIsLoggedIn={setIsLoggedIn} />} 
                />
                <Route 
                    path="/send" 
                    element={
                        isLoggedIn ? <Send /> : <Login setIsLoggedIn={setIsLoggedIn} />
                    } 
                />
            </Routes>
        </Router>
    );
}

export default App;