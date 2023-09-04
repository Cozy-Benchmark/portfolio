import About from "../components/About";
import Contacts from "../components/Contacts";
import Intro from "../components/Intro";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";

const HomePage = () => {
  return (
    <div className="container home-screen">
      <div id='intro'>
        <NavBar></NavBar>
      </div>
      <div className="home-screen-main">
        <Intro></Intro>
        <div id="about" className="scroll-margin">
          <About></About>
        </div>
        <div id="projects" className="scroll-margin">
          <Projects></Projects>
        </div>
        <div id="contacts" className="scroll-margin">
          <Contacts></Contacts>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
