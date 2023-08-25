import React from "react";
import contactsData from "../data/contactsData";

const Contacts = () => {
  return (
    <div className="contacts">
      <h3>Contacts</h3>
      <div className="contacts-data">
        {contactsData.map((x) =>
          x.link ? (
            <a
              href={x.link}
              target="_blank"
              rel="noopener noreferrer"
              key={x.id}
              className="link-style"
            >
              <span key={x.id}>
                &nbsp; {React.createElement(x.icon)} &nbsp; {x.name}
              </span>
            </a>
          ) : (
            <span key={x.id} style={{ color: "#36f336" }}>
              &nbsp; {React.createElement(x.icon)} &nbsp; {x.name}
            </span>
          )
        )}
      </div>
    </div>
  );
};

export default Contacts;
