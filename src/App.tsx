import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Routes/Main";
import { useState, createContext } from "react";

function App() {

  return (
    <div style={{ height: "100%", display: "flex" }}>
        <Navbar />
        <Main />
    </div>
  );
}

export default App;
