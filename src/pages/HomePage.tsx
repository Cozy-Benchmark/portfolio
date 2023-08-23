import About from "../components/About";
import Contacts from "../components/Contacts";
import Intro from "../components/Intro";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";

const HomePage = () => {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <NavBar></NavBar>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "100vh",
          marginTop: "40px",
          position: "fixed",
        }}
      >
        <Intro></Intro>
        <div
          style={{
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
