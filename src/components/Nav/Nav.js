import React from "react";
import { Link } from "react-router-dom";
import "./nav.scss";

const Nav = () => {
  return (
    <div className="navWrapper">
      <nav>
        <Link to="/">
          <div className="nav-logo-container">
            <img
              src="https://i.imgur.com/5bhTfnA.png"
              alt="inkx logo"
              className="inkX-logo"
            />
          </div>
        </Link>
        <ul>
          <Link to="/artist#">
            <li>ARTISTS</li>
          </Link>
          <Link to="/piece#">
            <li>PIECES</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
