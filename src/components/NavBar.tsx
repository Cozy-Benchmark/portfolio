import { useState } from "react";
import { Link } from "react-router-dom";
import ContactsModal from "./ContactsModal";

const NavBar = () => {
  const [isModalOpen, setModalState] = useState(false);
  const toggleModal = () => setModalState(!isModalOpen);

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
          <div onClick={toggleModal} style={{ cursor: "pointer" }}>
            Contacts
          </div>
          <ContactsModal isOpen={isModalOpen} onClose={toggleModal} />
        </div>
      </div>
    </>
  );
};

export default NavBar;
