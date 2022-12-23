import { useState, createContext } from "react";
import "./App.css";
import Notification from "./Components/Misc/Notification";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Routes/Main";
export const GlobalContext = createContext<any>(undefined);

function App() {
    const [notif, setNotif] = useState<string>("");

    return (
        <GlobalContext.Provider value={{ setNotif: setNotif }}>
            <Navbar />
            <Main />
            <Notification text={notif} setNotif={setNotif} />
        </GlobalContext.Provider>
    );
}

export default App;
