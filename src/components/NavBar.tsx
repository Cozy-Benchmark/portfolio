const NavBar = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        Bryan Benchmark Mendoza
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "15%",
          }}
        >
          <div>About Me</div>
          <div>Projects</div>
          <div>Contacts</div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
