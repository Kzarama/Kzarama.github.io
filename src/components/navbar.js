import React from "react";

import "./styles/navbar.css";

import wolf_logo from "../images/wolf.png";

function Navbar(props) {
  return (
    <nav>
      <div>
        <img src={wolf_logo} alt="logo" className="logo" />
        <h1>kzarama</h1>
      </div>

      <ul className="nav-links">
        <li>
          {/* eslint-disable-next-line */}
          <a href="#">HOME</a>
        </li>
        <li>
          {/* eslint-disable-next-line */}
          <a href="#">PROJECTS</a>
        </li>
        <li>
          {/* eslint-disable-next-line */}
          <a href="#">LANGUAGES</a>
        </li>
        <li>
          {/* eslint-disable-next-line */}
          <a href="#">ABOUT</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
