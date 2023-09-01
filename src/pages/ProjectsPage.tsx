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
          <>
            <ul>
              <h2 className="project-title" id={item.id}>
                {item.name}
              </h2>
              <div
                style={{
                  display: "flex",
                  height: "500px",
                  marginTop: "-2rem",
                  padding: "0 3rem",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: "35%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
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
                    display: "flex",
                    flexDirection: "column",
                    width: "65%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      paddingTop: "2rem",
                    }}
                  >
                    {item.images.length > 0 && (
                      <ImageSlider slides={item.images} />
                    )}
                  </div>
                  <div>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={item.id}
                      style={{
                        display: "flex",
                        position: "absolute",
                        bottom: "2rem",
                        right: "4rem",
                        color: "#36f336",
                        textDecoration: "none",
                      }}
                    >
                      <span>See Project</span>
                    </a>
                  </div>
                </div>
              </div>
            </ul>
          </>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
