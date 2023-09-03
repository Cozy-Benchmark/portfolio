import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const NavBar = () => {
  return (
    <>
      <div className="container, navbar-box">
        <Link to={"/"} className="link-style" style={{ color: "#121212" }}>
          Bryan Benchmark Mendoza
        </Link>
        <div className="navbar-options">
          <HashLink
            to={"/#projects"}
            className="link-style"
            style={{ color: "#121212" }}
          >
            Projects
          </HashLink>
        </div>
      </div>
    </>
  );
};

export default NavBar;
