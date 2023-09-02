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
          <div
            style={{
              border: "1px solid #797979",
              borderRadius: "20px",
              marginBottom: "20px",
              backgroundColor: "#121212",
            }}
          >
            <ul>
              <h2 className="project-title" id={item.id}>
                {item.name}
              </h2>
              <div
                style={{
                  display: "flex",
                  height: "63vh",
                  padding: "0 2rem",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: "35%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
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
                </div>
                <div
                  style={{
                    width: "65%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {item.images.length > 0 && (
                      <ImageSlider slides={item.images} />
                    )}
                  </div>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={item.id}
                    style={{
                      position: "absolute",
                      bottom: " 2rem",
                      right: "4rem",
                      color: "#36f336",
                      textDecoration: "none",
                    }}
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
