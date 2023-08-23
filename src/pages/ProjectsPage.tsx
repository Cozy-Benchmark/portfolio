import NavBar from "../components/NavBar";
import projectsData from "../data/projectsData";

const ProjectsPage = () => {
  return (
    <div className="container, projects-screen">
      <NavBar></NavBar>
      <div className="project-page">
        <h1>Projects</h1>
        {projectsData.map((item) => (
          <>
            <ul>
              <h2 id={item.id}>{item.name}</h2>
              <ul>
                <div>
                  <h3>Description:</h3> <p>{item.descriptions}</p>
                </div>
                <div>
                  <h3>Tools Used:</h3>
                  {item.toolsUsed.map((x) => (
                    <ul>
                      <li>{x}</li>
                    </ul>
                  ))}
                </div>
              </ul>
            </ul>
          </>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
