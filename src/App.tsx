import "./App.css";
import Intro from "./components/Intro";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "97.5vh",
        border: "0",
      }}
    >
      <NavBar></NavBar>
      <Intro></Intro>
    </div>
  );
}

export default App;
