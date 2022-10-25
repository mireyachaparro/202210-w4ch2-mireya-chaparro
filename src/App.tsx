import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { PersonalForm } from "./components/personal-form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PersonalForm></PersonalForm>
      </header>
    </div>
  );
}

export default App;
