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
          left: "0",
          width: "100%",
          height: "40px",
          overflow: "hidden",
          padding: "0 20px",
          backgroundColor: "grey",
        }}
      >
        <Link
          to={"/"}
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
          }}
        >
          Bryan Benchmark Mendoza
        </Link>
        <div
          style={{ display: "flex", alignItems: "center", marginRight: "35px" }}
        >
          <div style={{ marginRight: "20px" }}>
            <Link to={"/projects"} style={{ textDecoration: "none" }}>
              Projects
            </Link>
          </div>
          <div onClick={toggleModal} style={{ cursor: "pointer" }}>
            Contacts
          </div>
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
