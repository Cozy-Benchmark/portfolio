import contactsData from "../data/contactsData";

const Contacts = () => {
  return (
    <div className="contacts">
      <h3>Contacts</h3>
      <div className="contacts-data">
        {contactsData.map((x) => (
          <p>&nbsp; &#x2022; &nbsp; {x.name} </p>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
