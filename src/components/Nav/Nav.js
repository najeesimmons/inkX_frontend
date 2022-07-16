import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <div className="navWrapper">
      <nav>
        <img
          src="https://i.imgur.com/TYlGYTk.png"
          className="inkX-logo"
          alt="inkX-logo"
        />
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/artist">ARTISTS</Link>
          </li>
          <li>
            <Link to="/piece">PIECES</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
