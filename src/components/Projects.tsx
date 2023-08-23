import { HashLink } from "react-router-hash-link";
const Projects = () => {
  return (
    <div className="projects">
      <h3>Projects </h3>
      <ul>
        <li>
          <h4>PLANTEA</h4>
        </li>
        Plantaea is a mobile application for introducing ethnobotanical plants
        to the masses which was integrated with GIS mapping, Image Processing,
        and Gamification.
        <br />
        <br />
        <HashLink to="/projects#plantaea" className="hashlink-style">
          View More..
        </HashLink>
        <li>
          <h4>COZY GAME HUB</h4>
        </li>
        A web application that shows a variety of games, which allows users to
        browse their favorite games. <br /> <br />
        <HashLink to="/projects#cozy-game-hub" className="hashlink-style">
          View More..
        </HashLink>
      </ul>
    </div>
  );
};

export default Projects;
