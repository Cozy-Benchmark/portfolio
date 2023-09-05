import projectsData from "../data/projectsData";
import ImageSlider from "./ImageSlider";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-details">
        <h1 className="primary-color" style={{ textAlign: "center" }}>
          Projects
        </h1>
        {projectsData.map((item, index) => (
          <div
            className={`project-container ${index % 2 === 0 ? "even" : "odd"}`}
          >
            <ul>
              <h2 className="project-title" id={item.id}>
                {item.name}
              </h2>
              <div
                className={`a-project-details ${
                  index % 2 === 0 ? "even" : "odd"
                }`}
              >
                <div className="project-details-left">
                  <div className="description-container">
                    <h3 className="sub">Description:</h3>{" "}
                    <p>{item.descriptions}</p>
                  </div>
                  <div>
                    <h3 className="sub">Tools Used:</h3>
                    {item.toolsUsed.map((x) => (
                      <ul>
                        <li className="body-text accent-color">{x}</li>
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

export default Projects;
