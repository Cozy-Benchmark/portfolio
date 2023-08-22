import contactsData from "../data/contactsData";

const Contacts = () => {
  return (
    <div
      style={{
        height: "10%",
        padding: "20px",
      }}
    >
      Contacts
      <div style={{ display: "flex", flexDirection: "row" }}>
        {contactsData.map((x) => (
          <p>&nbsp; &#x2022; &nbsp; {x.name} </p>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
