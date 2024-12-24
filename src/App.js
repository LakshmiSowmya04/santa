import logo from "./logo.svg";
import { Router, Routes, Route } from "react-dom";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Send from "./components/send";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/send" element={<Send />} />
      </Routes>
    </Router>
  );
}

export default App;
