import baguioCityImage from "../assets/general-img/baguio-city.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about">
        <div className="about-details">
          <h1 className="primary-color">About</h1>
          <p className='about-text'>
            I’m a fresh BSCS Graduate from Baguio City, Philippines, and an
            aspiring full-stack software developer. I enjoy building applications
            from start to finish. Still learning and growing, and hopefully with
            you!
          </p>
        </div>
      <img src={baguioCityImage} className="about-img"/>
      </div>
    </div>
  );
};

export default About;
