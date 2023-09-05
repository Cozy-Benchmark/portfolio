import { useEffect, useRef, useState } from "react";
import baguioCityImage from "../assets/general-img/baguio-city.jpg";

const About = () => {
  const detailRef = useRef<HTMLDivElement>(null);
  const [detailElementVisible, setDetailElementVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setDetailElementVisible(entry.isIntersecting);
    }, 
    {
      threshold: 0
    });

    if (detailRef.current) {
      observer.observe(detailRef.current);
    }
  });

  return (
    <div className="about-container">
      <div className="about">
        <div
          ref={detailRef}
          className={`about-details ${detailElementVisible ? "animate" : ""}`}
        >
          <h1 className="primary-color">About</h1>
          <p className="about-text">
            I’m a fresh BSCS Graduate from Baguio City, Philippines, and an
            aspiring full-stack software developer. I enjoy building
            applications from start to finish. Still learning and growing, and
            hopefully with you!
          </p>
        </div>
        <img
          src={baguioCityImage}
          className={`about-img ${detailElementVisible ? "animate" : ""}`}
        />
      </div>
    </div>
  );
};

export default About;
