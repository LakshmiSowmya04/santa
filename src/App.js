<<<<<<< HEAD
import logo from "./logo.svg";
import { Router, Routes, Route } from "react-dom";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Send from "./components/send";
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Send from "./components/Send";
>>>>>>> bd411f2da4b6234f64ff27eaaa9913fe18d9debe

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