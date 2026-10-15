
import { useState } from "react";
import "./App.css";

import Login from "./components/Login/Login";
import Agendamento from "./components/agendamento/agendamento";

function App() {
  const [telaAtual, setTelaAtual] = useState("login");

  return (
    <div className="App">
      {telaAtual === "login" ? (
        <Login
          onLogin={() => setTelaAtual("agendamento")}
        />
      ) : (
        <Agendamento />
      )}
    </div>
  );
}

export default App;
