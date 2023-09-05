import React from "react";
import contactsData from "../data/contactsData";

const Contacts = () => {
  return (
    <div className="contacts-container">
      <div className="contacts">
        <h3 className="primary-color main">CONTACTS</h3>
        <div className="contacts-data">
          {contactsData.map((x) =>
            x.link ? (
              <a
                href={x.link}
                target="_blank"
                rel="noopener noreferrer"
                key={x.id}
                className="link-style accent-color contacts-icon"
              >
                {React.createElement(x.icon)}
              </a>
            ) : (
              <span
                key={x.id}
                className="accent-color contacts-icon"  
              >
                {React.createElement(x.icon)}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
