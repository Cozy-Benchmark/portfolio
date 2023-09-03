import baguioCityImage from "../assets/general-img/baguio-city.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about-details">
        <h1 style={{color:'#36f336'}}>About</h1>
        <p>
          I’m a fresh BSCS Graduate from Baguio City, Philippines, and an
          aspiring full-stack software developer. I enjoy building applications
          from start to finish. Still learning and growing, and hopefully with
          you!
        </p>
      </div>
      <img src={baguioCityImage} />
    </div>
  );
};

export default About;
