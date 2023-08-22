import { useState } from "react";
import { Link } from "react-router-dom";
import ContactsModal from "./ContactsModal";

const NavBar = () => {
  const [isModalOpen, setModalState] = useState(false);
  const toggleModal = () => setModalState(!isModalOpen);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          position: "fixed",
          top: "0",
          width: "100%",
          overflow: "hidden",
          backgroundColor: "#333",
        }}
      >
        <Link to={"/"} style={{ textDecoration: "none" }}>
          Bryan Benchmark Mendoza
        </Link>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "10%",
          }}
        >
          <div>
            <Link to={"/projects"} style={{ textDecoration: "none" }}>
              Projects
            </Link>
          </div>
          <div onClick={toggleModal}>Contacts</div>
          <ContactsModal
            isOpen={isModalOpen}
            onClose={toggleModal}
          ></ContactsModal>
        </div>
      </div>
    </>
  );
};

export default NavBar;
