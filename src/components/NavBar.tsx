import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="container, navbar-box">
        <Link to={"/"} className="link-style">
          Bryan Benchmark Mendoza
        </Link>
        <div className="navbar-options">
          <Link to={"/projects"} className="link-style">
            Projects
          </Link>
          <div>Contacts</div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
