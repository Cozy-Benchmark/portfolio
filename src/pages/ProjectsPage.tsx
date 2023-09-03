import ImageSlider from "../components/ImageSlider";
import NavBar from "../components/NavBar";
import projectsData from "../data/projectsData";

const ProjectsPage = () => {
  return (
    <div className="container, projects-screen">
      <NavBar></NavBar>
      <div className="project-page">
        <h1 className="project-page-title">Projects</h1>
        {projectsData.map((item) => (
          <div className="project-container">
            <ul>
              <h2 className="project-title" id={item.id}>
                {item.name}
              </h2>
              <div className="project-details">
                <div className="project-details-left">
                  <div className="description-container">
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
                </div>
                <div className="project-details-right">
                  <div className="project-img-container">
                    {item.images.length > 0 && (
                      <ImageSlider slides={item.images} />
                    )}
                  </div>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={item.id}
                    className="see-project-link"
                  >
                    <span>See Project</span>
                  </a>
                </div>
              </div>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
