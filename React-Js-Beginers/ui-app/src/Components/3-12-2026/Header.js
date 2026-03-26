import "./style.css";
import {Link } from "react-router-dom";
function Header(params) {
  return (
    <div>
      <header
        style={{
          background: "#282c34",
          padding: "2px",
          color: "white",
        }}
      >
        <h1 style={{ textAlign: "center" }}>My Simple Header</h1>
        <div className="header-menu">
          <div><Link to="/">Home</Link></div>
          <div><Link to="/contact">Contact</Link></div>
          <div><Link to="/about">About</Link></div>
          <div><Link to="/users">Users</Link></div>
        </div>
      </header>
    </div>
  );
}

export default Header;
