import { HashLink } from "react-router-hash-link";

const NavBar = () => {
  return (
    <>
      <div className="container navbar-box">
        <HashLink to={"/#intro"} className="secondary-color link-style">
          Bryan Benchmark Mendoza
        </HashLink>
        <div className="navbar-options">
          <HashLink to={"/#about"} className="secondary-color link-style">
            About
          </HashLink>
          <HashLink to={"/#projects"} className="secondary-color link-style">
            Projects
          </HashLink>
          <HashLink to={"/#contacts"} className="secondary-color link-style">
            Contacts
          </HashLink>
        </div>
      </div>
    </>
  );
};

export default NavBar;
