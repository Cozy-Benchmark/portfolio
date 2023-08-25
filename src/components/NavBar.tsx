import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="container, navbar-box">
        <Link to={"/"} className="link-style" style={{ color: "#121212" }}>
          Bryan Benchmark Mendoza
        </Link>
        <div className="navbar-options">
          <Link
            to={"/projects"}
            className="link-style"
            style={{ color: "#121212" }}
          >
            Projects
          </Link>
          <div>Contacts</div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
