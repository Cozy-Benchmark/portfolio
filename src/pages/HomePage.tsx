import About from "../components/About";
import Contacts from "../components/Contacts";
import Intro from "../components/Intro";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";

const HomePage = () => {
  return (
    <div className="container, home-screen">
      <NavBar></NavBar>
      <div className="home-screen-main">
        <Intro></Intro>
        <About></About>
        <div id="projects">
          <Projects></Projects>
        </div>
        <Contacts></Contacts>
      </div>
    </div>
  );
};

export default HomePage;
