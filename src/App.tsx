import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Routes/Main";
import { useState, createContext } from "react";
export const LangContext: any = createContext(undefined);

function App() {
  const [lang, setLang] = useState("english");

  return (
    <div style={{ height: "100%", display: "flex" }}>
      <LangContext.Provider value={{ lang, setLang }}>
        <Navbar />
        <Main />
      </LangContext.Provider>
    </div>
  );
}

export default App;
