import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link to={"/"} style={{ textDecoration: "none" }}>
          Bryan Benchmark Mendoza
        </Link>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "15%",
          }}
        >
          <div>
            <Link to={"/about"} style={{ textDecoration: "none" }}>
              About Me
            </Link>
          </div>
          <div>
            <Link to={"/projects"} style={{ textDecoration: "none" }}>
              Projects
            </Link>
          </div>
          <div>Contacts</div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
