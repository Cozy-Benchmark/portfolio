import NavBar from "../components/NavBar";

const ProjectsPage = () => {
  return (
    <>
      <NavBar></NavBar>
      <h1>Projects</h1>
      <ul>
        <li>
          <h2 id="plantaea">PLANTAEA</h2>
          <ul>
            <h3>Description</h3>
            <p>
              This project is the thesis of me and my groupmates in College. It
              is the byproduct of an idea to reintroduce the topic of
              ethnobotany to the masses, to allow them to learn and understand
              the various plants around them and their uses. In this project, I
              was one of the developers involved in the front-end and the
              back-end development. With a focus on the development of the GIS
              Mapping functionality.
            </p>
            <h3>Client</h3>
            <p>Saint Louis Univerisity Thesis</p>
            <h3>Develpment Period</h3>
            <p>2022-2023</p>
            <h3>Tools used</h3>
            <ul>
              <li>Figma</li>
              <li>Android Studio</li>
              <li>Visual Studio Code</li>
              <li>Github</li>
              <li>React Native</li>
            </ul>
            <h3>Role</h3>
            <ul>
              <li>Full-Stack Developer</li>
            </ul>
          </ul>
        </li>
        <li>
          <h2 id="cozy-game-hub">Cozy Game Hub</h2>
          <ul>
            <h3>Description</h3>
            <p>
              This is a self-done project to attempt to create a Steam-like
              clone that allows users to view games. Utilizing Rawg.io as the
              basis for the design and its API to retrieve the necessary
              information, it was built using React and Typescript.
            </p>
            <h3>Tools Used</h3>
            <ul>
              <li>Visual Studio Code</li>
              <li>Github</li>
              <li>React</li>
              <li>Typescript</li>
              <li>Chakra UI</li>
              <li>Rawg.io API</li>
            </ul>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default ProjectsPage;
