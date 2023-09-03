import { HashLink } from "react-router-hash-link";

const NavBar = () => {
  return (
    <>
      <div className="container, navbar-box">
        <HashLink
          to={"/#intro"}
          className="link-style"
          style={{ color: "#121212" }}
        >
          Bryan Benchmark Mendoza
        </HashLink>
        <div className="navbar-options">
          <HashLink
            to={"/#about"}
            className="link-style"
            style={{ color: "#121212" }}
          >
            About
          </HashLink>
          <HashLink
            to={"/#projects"}
            className="link-style"
            style={{ color: "#121212" }}
          >
            Projects
          </HashLink>
          <HashLink
            to={"/#contacts"}
            className="link-style"
            style={{ color: "#121212" }}
          >
            Contacts
          </HashLink>
        </div>
      </div>
    </>
  );
};

export default NavBar;
