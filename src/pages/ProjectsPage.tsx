import NavBar from "../components/NavBar";
import projectsData from "../data/projectsData";

const ProjectsPage = () => {
  return (
    <div style={{ border: "0", padding: "0 10px" }}>
      <NavBar></NavBar>

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
  );
};

export default ProjectsPage;
