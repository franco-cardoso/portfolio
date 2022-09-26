import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Routes/Main";

function App() {

  return (
    <div style={{ height: "100%", display: "flex" }}>
        <Navbar />
        <Main />
    </div>
  );
}

export default App;
