import React from "react";
import "../styles/Nav.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <ul className="display-flex">
        <li>
          <Link className="link" to="/About">
            About me
          </Link>
        </li>
        <li>
          <Link className="link" to="/Skills">
            Skills
          </Link>
        </li>
        <li>
          <Link className="link" to="/Portfolio">
            Portfolio
          </Link>
        </li>
        <li>
          <Link className="link" to="/">
            Contact Me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
