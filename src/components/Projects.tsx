import { HashLink } from "react-router-hash-link";
const Projects = () => {
  return (
    <div
      style={{
        height: "65%",
        padding: "20px",
      }}
    >
      Projects <br />
      <ul>
        <li>PLANTEA</li>
        Plantaea is a mobile application for introducing ethnobotanical plants
        to the masses which was integrated with GIS mapping, Image Processing,
        and Gamification.
        <br />
        <HashLink to="/projects#plantaea">View More..</HashLink>
        <li>COZY GAME HUB</li>A web application that shows a variety of games,
        which allows users to browse their favorite games. <br />
        <HashLink to="/projects#cozy-game-hub">View More..</HashLink>
      </ul>
    </div>
  );
};

export default Projects;
