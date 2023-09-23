import { HashLink } from "react-router-hash-link";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  return (
    <>
      <div className="navbar-box">
        <HashLink to={"/#intro"} className="secondary-color link-style">
          Bryan Benchmark Mendoza
        </HashLink>
        <div className="navbar-options">
          <a className="navbar-hamburger-menu">
            <GiHamburgerMenu />
          </a>
          <div className="navbar-links">
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
      </div>
    </>
  );
};

export default NavBar;
