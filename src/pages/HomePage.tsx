import About from "../components/About";
import Contacts from "../components/Contacts";
import Intro from "../components/Intro";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";

const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "97.5vh",
        border: "0",
        padding: "0 10px",
      }}
    >
      <NavBar></NavBar>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "100%",
          marginTop: "40px",
        }}
      >
        <Intro></Intro>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "50%",
          }}
        >
          <About></About>
          <Projects></Projects>
          <Contacts></Contacts>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
