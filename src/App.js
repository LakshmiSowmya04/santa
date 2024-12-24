import logo from "./logo.svg";
import { router, routes, route } from "react-route-dom";
import "./App.css";
import login from "./components/Login";
import signup from "./components/Signup";
import send from "./components/send";

function App() {
  return (
    <Router>
      <routes>
        <route path="/" element={login} />
        <route path="/signup" element={signup} />
        <route path="/send" element={send} />
      </routes>
    </Router>
  );
}

export default App;
