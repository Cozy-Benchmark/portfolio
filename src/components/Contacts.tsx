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
              <p>&nbsp; &#x2022; &nbsp; {x.name}</p>
            </a>
          ) : (
            <p key={x.id}>&nbsp; &#x2022; &nbsp; {x.name}</p>
          )
        )}
      </div>
    </div>
  );
};

export default Contacts;
