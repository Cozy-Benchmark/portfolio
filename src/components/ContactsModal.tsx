import { AiOutlineClose } from "react-icons/ai";
import contactsData from "../data/contactsData";
import { useEffect, useRef } from "react";

interface IContactsModal {
  isOpen: boolean;
  onClose: () => void;
}

const ContactsModal = ({ isOpen, onClose }: IContactsModal) => {
  const overlayRef = useRef(null);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);
  
  return isOpen ? (
    <>
      <div
        style={{
          position: "fixed",
          top: "0",
          bottom: "0",
          left: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.81)",
            cursor: "pointer",
          }}
          ref={overlayRef}
          onClick={handleOverlayClick}
        ></div>
        <div
          style={{
            position: "relative",
            width: "30%",
            margin: "0 10%",
            padding: "50px",
            boxSizing: "border-box",
            borderRadius: "10px",
            backgroundColor: "#fff",
            cursor: "auto",
          }}
        >
          <div
            className="modal_close_button"
            onClick={onClose}
            style={{ display: "flex", justifyContent: "end" }}
          >
            <AiOutlineClose />
          </div>
          <div
            className="modal_title"
            style={{ display: "flex", justifyContent: "center" }}
          >
            Contacts
          </div>
          <div className="modal_content">
            {contactsData.map((x) =>
              x.link ? (
                <a
                  href={x.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={x.id}
                >
                  <p>{x.name}</p>
                </a>
              ) : (
                <p key={x.id}>{x.name}</p>
              )
            )}
          </div>
        </div>
      </div>
    </>
  ) : null;
};

export default ContactsModal;
