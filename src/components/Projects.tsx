import { useEffect, useRef, useState } from "react";
import projectsData from "../data/projectsData";
import ImageSlider from "./ImageSlider";

const Projects = () => {
  const titleRef = useRef<HTMLHRElement>(null);
  const [inView, setInView] = useState<string[]>([]);
  const [titleVisibility, setTitleVisibility] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const inViewProjects = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => entry.target.id);

        setInView(inViewProjects);

        const entry = entries[0];
        setTitleVisibility(entry.isIntersecting);
      },
      {
        threshold: 0,
      }
    );

    projectsData.forEach((project) => {
      const element = document.getElementById(project.id);
      if (element) {
        observer.observe(element);
      }
    });

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      projectsData.forEach((project) => {
        const element = document.getElementById(project.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <div className="projects">
      <div className="projects-details">
        <h1
          ref={titleRef}
          className={`main primary-color projects-title ${
            titleVisibility ? "animate" : ""
          }`}
        >
          PROJECTS
        </h1>
        {projectsData.map((item, index) => (
          <div
            className={`project-container ${index % 2 === 0 ? "even" : "odd"} ${
              inView.includes(item.id) ? "animate" : ""
            }`}
            key={item.id}
            id={item.id}
          >
            <h2 className="project-title">{item.name}</h2>
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
                  {item.toolsUsed.map((item) => (
                    <div key={item}>
                      <ul>
                        <li className="body-text accent-color">{item}</li>
                      </ul>
                    </div>
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
                  className={`see-project-link ${
                    index % 2 === 0 ? "even" : "odd"
                  }`}
                >
                  <span>See Project</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
