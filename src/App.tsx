import { useState, createContext } from "react";
import "./App.css";
import Notification from "./Components/Misc/Notification";
import Navbar from "./Components/Navbar/Navbar";
import { TGlobalContext } from "./Components/Utility/types";
import Main from "./Routes/Main";

const defaultValue = {
    sendNotif: () => {
        throw new Error("Global Context is set to default");
    },
};
export const GlobalContext = createContext<TGlobalContext>(defaultValue);

function App() {
    const [notif, sendNotif] = useState<string>("");

    return (
        <GlobalContext.Provider value={{ sendNotif }}>
            <Navbar />
            <Main />
            <Notification notif={notif} sendNotif={sendNotif} />
        </GlobalContext.Provider>
    );
} 

export default App;
