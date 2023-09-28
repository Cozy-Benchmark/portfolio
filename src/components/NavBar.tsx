import { HashLink } from "react-router-hash-link";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const NavBar = () => {
  const [clicked, setClick] = useState(false);

  const handleClick = () => setClick(!clicked);
  const closeMenu = () => setClick(false);

  return (
    <>
      <div className="navbar-box">
        <HashLink to={"/#intro"} className="secondary-color link-style">
          Bryan Benchmark Mendoza
        </HashLink>
        <div className="navbar-options" onClick={handleClick}>
          <div className="navbar-menu">
            {clicked ? <AiOutlineClose /> : <GiHamburgerMenu />}
          </div>

          <div className={clicked ? "navbar-links active" : "navbar-links"}>
            <HashLink
              to={"/#about"}
              className="secondary-color link-style"
              onClick={closeMenu}
            >
              About
            </HashLink>
            <HashLink
              to={"/#projects"}
              className="secondary-color link-style"
              onClick={closeMenu}
            >
              Projects
            </HashLink>
            <HashLink
              to={"/#contacts"}
              className="secondary-color link-style"
              onClick={closeMenu}
            >
              Contacts
            </HashLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
