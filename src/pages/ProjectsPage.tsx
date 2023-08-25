import NavBar from "../components/NavBar";
import projectsData from "../data/projectsData";

const ProjectsPage = () => {
  return (
    <div className="container, projects-screen">
      <NavBar></NavBar>
      <div className="project-page">
        <h1 className="project-page-title">Projects</h1>
        {projectsData.map((item) => (
          <>
            <ul>
              <h2 className="project-title" id={item.id}>
                {item.name}
              </h2>
              <ul>
                <div>
                  <h3 className="sub">Description:</h3>{" "}
                  <p>{item.descriptions}</p>
                </div>
                <div className="project-tools">
                  <h3 className="sub">Tools Used:</h3>
                  {item.toolsUsed.map((x) => (
                    <ul>
                      <li className="body-text">{x}</li>
                    </ul>
                  ))}
                </div>
                <div>
                  {item.images.map((image, index) => (
                    <img
                      key={index}
                      src={image.src}
                      width={image.width}
                      height={image.height}
                      alt={`${item.name} - Image ${index + 1}`}
                      className="project-img"
                    ></img>
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
